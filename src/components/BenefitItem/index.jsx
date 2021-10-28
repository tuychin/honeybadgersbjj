import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Inner = styled(CardActionArea)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  height: '100%',
}));

const BenefitItem = ({ img, title, description }) => (
  <Card sx={{ maxWidth: 335, m: 3 }}>
    <Inner>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="sauna"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Inner>
  </Card>
);

BenefitItem.propTypes = {
  img: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitItem;
