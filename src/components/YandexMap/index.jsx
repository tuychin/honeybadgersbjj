import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Box from '@mui/material/Box';

import Loader from '../Loader';

const YandexMap = ({ coordinates, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const mapChecker = () => {
    const delay = 1000;

    let timerId = setTimeout(function check() {
      const yandexMapElem = document.querySelector('ymaps');

      timerId = setTimeout(check, delay);

      if (yandexMapElem) {
        clearTimeout(timerId);
        setIsLoaded(true);
      }
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  };

  useEffect(mapChecker, []);

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '240px',
    }}
    >
      <Loader isActive={!isLoaded} />
      <YMaps>
        <Map
          width="100%"
          defaultState={{ center: coordinates, zoom: 15 }}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            geometry={coordinates}
            properties={{
              balloonContentBody: description,
            }}
            options={{
              preset: 'islands#redSportIcon',
            }}
          />
        </Map>
      </YMaps>
    </Box>
  );
};

YandexMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  description: PropTypes.string.isRequired,
};

export default YandexMap;
