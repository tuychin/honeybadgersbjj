import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import showcase from '../../images/showcase.jpg';

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
  background: `url(${showcase}) 100% 100% no-repeat`,
  backgroundSize: 'cover',
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
  return (
    <StyledWrapper>
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
