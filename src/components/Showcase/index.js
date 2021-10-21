import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import showcase from '../../images/showcase.jpg';

const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: `url(${showcase}) 100% 100% no-repeat`,
  backgroundSize: 'cover',
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 0,
}));

const Showcase = () => {
  return (
    <StyledWrapper>
      <Overlay />
      <Typography
        variant="h1"
        sx={{
          color: 'text.primary',
          zIndex: 1,
        }}
      >
        Мы - медоеды!
      </Typography>
    </StyledWrapper>
  )
}

export default Showcase
