import React from 'react';
import Helmet from 'react-helmet';
import { styled } from '@mui/material/styles';
import { navigate } from 'gatsby';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFoundPageInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const NotFoundPageText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const NotFoundPage = () => (
  <Container>
    <Helmet title="404 | Страница не найдена" />
    <NotFoundPageInner>
      <NotFoundPageText variant="h1" component="h1">
        404
      </NotFoundPageText>
      <NotFoundPageText variant="h4" component="div">
        страница не найдена
      </NotFoundPageText>
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() => navigate(-1)}
      >
        Вернуться
      </Button>
    </NotFoundPageInner>
  </Container>
);

export default NotFoundPage;
