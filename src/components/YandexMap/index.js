import React from 'react';
import PropTypes from 'prop-types';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const YandexMap = ({coordinates}) => {
  return (
    <YMaps>
      <Map
        width="100%"
        defaultState={{center: coordinates, zoom: 15}}
      >
        <Placemark
          modules={['geoObject.addon.balloon']}
          geometry={coordinates}
          properties={{
            balloonContentBody: 'Honey badger BJJ team.<br>Улица Ленинская Слобода, 19',
          }}
          options={{
            preset: 'islands#redSportIcon',
          }}
        />
      </Map>
    </YMaps>
  );
}

YandexMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number),
};

export default YandexMap;
