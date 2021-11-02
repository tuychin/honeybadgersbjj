import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const QuestionsWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
}));

const Questions = () => (
  <QuestionsWrapper sx={{ boxShadow: 3 }}>
    <Box>
      <Link href="tel:+79256355455">+7 (925) 635 54 55</Link>
      <Box sx={{ marginLeft: '-10px' }}>
        <IconButton color="primary">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary">
          <TelegramIcon />
        </IconButton>
      </Box>
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Link href="/privacy-policy">
        <Typography variant="body2">Политика конфенденциальности</Typography>
      </Link>
      <Link href="/cookie-policy">
        <Typography variant="body2">Политика Cookie</Typography>
      </Link>
      <Typography sx={{ mt: 3 }} variant="caption" align="right">
        {`©${new Date().getFullYear()} Honey badgers BJJ`}
      </Typography>
    </Box>
  </QuestionsWrapper>
);

export default Questions;
