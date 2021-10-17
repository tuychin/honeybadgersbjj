import * as React from 'react';
import {
  Button,
  Typography,
} from '@mui/material';

// markup
const MainPage = () => {
  return (
    <main>
      <Typography
        sx={{
          color: 'text.primary',
        }}
      >
        HI!!!
      </Typography>
      <Button variant="contained">Primary</Button>
      <br />
      <br />
      <Button variant="contained" color="secondary">Secondary</Button>
    </main>
  )
}

export default MainPage
