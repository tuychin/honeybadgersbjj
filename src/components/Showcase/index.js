import React, {useEffect, useRef} from 'react';
import anime from 'animejs/lib/anime.es.js';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
}

const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  padding: '40px 20%',
  overflow: 'hidden',
}));

const StyledImage = styled('img')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100vw',
  height: '100vh',
}));

const StyledTypography = styled(Typography)(() => ({
  marginBottom: 20,
  textAlign: 'center',
  zIndex: 0,
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

const Showcase = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    animateBackground(imageRef.current);
  }, []);

  return (
    <StyledWrapper>
      <StyledImage ref={imageRef} src={showcase} alt="bjj image" />
      <Overlay />
      <StyledTypography variant="h1">
        HONEY BADGERS
      </StyledTypography>
      <StyledTypography>
        Медоед занесён в книгу рекордов Гиннеса, как самое бесстрашное животное в мире.
        Он готов напасть на кого угодно, особенно почуяв опасность.
        Без опаски питается ядовитыми змеями, в том числе и кобрами.
        Хочешь быть как медоед?
        <br />
        Запишись на первую беплатную тренировку по бразильскому джиу-джитсу.
      </StyledTypography>
    </StyledWrapper>
  )
}

export default Showcase
