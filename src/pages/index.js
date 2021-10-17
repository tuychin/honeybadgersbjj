import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// markup
const MainPage = () => {
  return (
    <main>
      <Typography
      variant="h1"
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
