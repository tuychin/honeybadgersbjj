import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { openContactModal } from '../../components/ContactModal/contactModalSlice';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "index-page"}}) {
        frontmatter {
          coach {
            name
            photo
            description
            background
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter.coach;
};

const CoachWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const CoachInner = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  [theme.breakpoints.between('xs', 'md')]: {
    flexDirection: 'column',
  },
}));

const CoachImg = styled('img')(() => ({
  width: '100%',
  maxWidth: 400,
  borderRadius: 5,
  objectFit: 'cover',
}));

const Coach = () => {
  const {
    name,
    description,
    photo,
    background,
  } = useData();
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <CoachWrapper sx={{ backgroundImage: `url(${background})` }}>
      <Typography
        sx={{
          mb: {
            xs: 5,
            md: 8,
          },
        }}
        variant="h2"
        component="h2"
        color="secondary"
      >
        Тренер
      </Typography>
      <CoachInner>
        <CoachImg sx={{ boxShadow: 3, m: 3 }} src={photo} alt="coach" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'start',
            },
            maxWidth: '500px',
          }}
        >
          <Typography sx={{ mb: 3 }} variant="h3" component="h3" color="secondary">
            {name}
          </Typography>
          {description && (
          <Typography
            sx={{
              mb: 3,
              textAlign: { xs: 'center', md: 'left' },
            }}
            variant="body1"
            component="div"
            color="secondary"
          >
            {description}
          </Typography>
          )}
          <Button
            sx={{ mb: 3 }}
            size="large"
            variant="contained"
            color="primary"
            onClick={handleContactModalOpen}
          >
            Записаться
          </Button>
        </Box>
      </CoachInner>
    </CoachWrapper>
  );
};

export default Coach;
