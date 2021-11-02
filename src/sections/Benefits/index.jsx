import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import benefitsMock from './mock-data';
import BenefitItem from '../../components/BenefitItem';

const BenefitsWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const BenefitsInner = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

const Benefits = () => (
  <BenefitsWrapper sx={{ boxShadow: 3 }}>
    <Typography
      sx={{
        mb: {
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
      {benefitsMock.map(({
        img,
        title,
        description,
        tags,
      }) => (
        <BenefitItem
          img={img}
          title={title}
          description={description}
          tags={tags}
          key={title}
        />
      ))}
    </BenefitsInner>
  </BenefitsWrapper>
);

export default Benefits;
