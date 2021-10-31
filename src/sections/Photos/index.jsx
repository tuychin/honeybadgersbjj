import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PhotosWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

const PhotosInner = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

// eslint-disable-next-line arrow-body-style
const Photos = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      userInstData {
        instData {
          medias {
            node {
              thumbnail_src
              shortcode
              edge_media_to_caption {
                edges {
                  node {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <PhotosWrapper>
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
        Инстаграм
      </Typography>
      <PhotosInner>
        {JSON.stringify(data)}
      </PhotosInner>
    </PhotosWrapper>
  );
};

export default Photos;
