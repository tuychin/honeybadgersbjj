import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Seo from '../../seo';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "about-page"}}) {
        frontmatter {
          title
        }
        internal {
          content
        }
      }
    }
  `);

  return data.markdownRemark;
};

const AboutInner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const About = () => {
  const { frontmatter: { title }, internal: { content } } = useData();

  return (
    <Container>
      <Seo pageTitle="О нас" />
      <AboutInner>
        <AboutTitle variant="h2" component="h1">
          {title}
        </AboutTitle>
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
          {content}
        </Typography>
      </AboutInner>
    </Container>
  );
};

export default About;
