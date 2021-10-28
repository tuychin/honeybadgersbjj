import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import benefitsMock from './mock-data';
import BenefitItem from '../../components/BenefitItem';

const BenefitsWrapper = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const BenefitsInner = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

const Benefits = () => (
  <BenefitsWrapper>
    <Typography
      sx={{
        my: {
          xs: 5,
          md: 8,
        },
      }}
      variant="h2"
      component="h2"
    >
      Преимущества
    </Typography>
    <BenefitsInner>
      {benefitsMock.map(({ img, title, description }) => (
        <BenefitItem
          img={img}
          title={title}
          description={description}
          key={title}
        />
      ))}
    </BenefitsInner>
  </BenefitsWrapper>
);

export default Benefits;