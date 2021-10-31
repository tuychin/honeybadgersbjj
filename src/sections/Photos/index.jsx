import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import useInstPosts from '../../hooks/useInstPosts';

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
  const { instPosts } = useInstPosts();

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
        <ol>
          {instPosts?.map(({ postId, thumbnailSrc, description }) => (
            <li key={postId}>
              <ul>
                <li>{`postId: ${postId}`}</li>
                <li>{`thumbnailSrc: ${thumbnailSrc}`}</li>
                <li>{`description: ${description}`}</li>
              </ul>
              <br />
            </li>
          ))}
        </ol>
      </PhotosInner>
    </PhotosWrapper>
  );
};

export default Photos;
