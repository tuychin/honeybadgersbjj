import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BenefitItem from '../../components/BenefitItem';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "index-page"}}) {
        frontmatter {
          benefits {
            title
            description
            image
            tags {
              tag
            }
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter.benefits;
};

const BenefitsWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
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

const Benefits = () => {
  const benefits = useData();

  return (
    <BenefitsWrapper>
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
        {benefits.map(({
          title,
          description,
          image,
          tags,
        }) => {
          const transformedTags = tags?.map(({ tag }) => tag) || [];

          return (
            <BenefitItem
              img={image}
              title={title}
              description={description}
              tags={transformedTags}
              key={title}
            />
          );
        })}
      </BenefitsInner>
    </BenefitsWrapper>
  );
};

export default Benefits;
