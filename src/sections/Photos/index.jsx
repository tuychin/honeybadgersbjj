import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useInstagramPosts from '../../hooks/useInstagramPosts';

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
  const { instagramPosts } = useInstagramPosts();

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
        {instagramPosts}
      </PhotosInner>
    </PhotosWrapper>
  );
};

export default Photos;
