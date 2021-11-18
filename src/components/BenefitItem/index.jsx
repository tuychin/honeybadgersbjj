import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const Inner = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  height: '100%',
}));

const BenefitItem = ({
  img,
  title,
  description,
  tags,
}) => (
  <Card sx={{ maxWidth: 335, m: 3 }}>
    <Inner>
      <CardMedia
        component="img"
        height="140"
        fluid={`${img}?nf_resize=fit&h=140`}
        alt={title}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1 }}
          variant="body2"
          color="text.primary"
        >
          {description}
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          {tags.map((tagText) => (
            <Chip label={tagText} size="small" key={tagText} />
          ))}
        </Box>
      </CardContent>
    </Inner>
  </Card>
);

BenefitItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default BenefitItem;
