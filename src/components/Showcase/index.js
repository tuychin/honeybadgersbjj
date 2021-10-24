import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ContactForm from '../ContactForm';
import showcase from '../../images/showcase.jpg';

const animateBackground = (target) => {
  anime({
    targets: target,
    easing: 'easeInOutQuad',
    scale: {
      value: [1, 1.2],
      duration: 16000,
    },
    translateX: {
      value: '-50%',
      duration: 0,
    },
    translateY: {
      value: '-50%',
      duration: 0,
    },
  });
};

const ShowcaseWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '800px',
  zIndex: 0,
  [theme.breakpoints.between('xs', 'md')]: {
    width: '100%',
    padding: '10px',
  },
}));

const StyledImage = styled('img')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  objectFit: 'cover',
  height: '100%',
  width: '100%',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: 40,
  textAlign: 'center',
  [theme.breakpoints.between('xs', 'md')]: {
    marginBottom: 20,
  },
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

const Showcase = () => {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    animateBackground(imageRef.current);
  }, []);

  const handleContactFormOpen = () => {
    setIsContactFormOpen(true);
  };

  const handleContactFormClose = () => {
    setIsContactFormOpen(false);
  };

  return (
    <ShowcaseWrapper>
      <StyledImage ref={imageRef} src={showcase} alt="bjj image" />
      <Overlay />
      <ContentWrapper>
        <StyledTypography variant="h1">HONEY BADGERS</StyledTypography>
        <StyledTypography>
          Медоед занесён в книгу рекордов Гиннеса, как самое бесстрашное животное в мире. Он способен вести схватку один
          против нескольких львов и есть королевских кобр. Хочешь быть как медоед? Запишись на тренировку по
          бразильскому джиу-джитсу.
        </StyledTypography>
        <Button size="large" variant="contained" color="primary" onClick={handleContactFormOpen}>
          Записаться
        </Button>
      </ContentWrapper>
      <ContactForm isOpen={isContactFormOpen} handleClose={handleContactFormClose} />
    </ShowcaseWrapper>
  );
};

export default Showcase;
