import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@mui/material/Box';
import Showcase from '../sections/Showcase';
import Information from '../sections/Information';
import Benefits from '../sections/Benefits';
import Coach from '../sections/Coach';
import Questions from '../sections/Questions';
import TargetBanner from '../components/TargetBanner';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "index-page"}}) {
        frontmatter {
          target_banner {
            text
            button
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter.target_banner;
};

const MainPage = () => {
  const { text, button } = useData();
  return (
    <Box>
      <Showcase />
      <Information />
      <Benefits />
      <Coach />
      <Questions />
      <TargetBanner
        text={text}
        buttonText={button}
      />
    </Box>
  );
};

export default MainPage;
