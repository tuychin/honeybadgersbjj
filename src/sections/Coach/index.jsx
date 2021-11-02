import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { openContactModal } from '../../components/ContactModal/contactModalSlice';
import coach from '../../images/coach.webp';
import coachBg from '../../images/coach_bg.webp';

const CoachWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundImage: `url(${coachBg})`,
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
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
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <CoachWrapper>
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
        Тренер
      </Typography>
      <CoachInner>
        <CoachImg sx={{ boxShadow: 3, m: 3 }} src={coach} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              md: 'start',
            },
          }}
        >
          <Typography sx={{ mb: 3 }} variant="h3" component="h3">
            Кирилл Гордеев
          </Typography>
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
