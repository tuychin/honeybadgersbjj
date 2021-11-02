import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const FOOTER_PAGES = [
  { name: 'Новости', href: '/news' },
  { name: 'О нас', href: '/about' },
];

const QuestionsWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
}));

const Questions = () => (
  <QuestionsWrapper sx={{ boxShadow: 3 }}>
    <Box sx={{ display: 'flex' }}>
      <Box sx={{
        mr: {
          xs: 0,
          md: 5,
        },
      }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Контакты:
        </Typography>

        <Link href="tel:+79256355455">+7 (925) 635 54 55</Link>

        <Box sx={{ marginLeft: '-10px' }}>
          <Link href="https://www.instagram.com/tuychin.r" target="_blank" rel="noopener">
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
          </Link>

          <Link href="https://t.me/tuychin_r" target="_blank" rel="noopener">
            <IconButton color="primary">
              <TelegramIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" component="div" gutterBottom>
          Страницы:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {FOOTER_PAGES.map(({ name, href }) => (
            <Link href={href} key={`${name}${href}`}>
              {name}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
    >
      <Link href="/privacy-policy">
        <Typography variant="body2">Политика конфенденциальности</Typography>
      </Link>

      <Link href="/cookie-policy">
        <Typography variant="body2">Политика Cookie</Typography>
      </Link>

      <Typography
        sx={{ position: 'absolute', bottom: 0, right: 0 }}
        variant="caption"
        align="right"
      >
        {`©${new Date().getFullYear()} Honey badgers BJJ`}
      </Typography>
    </Box>
  </QuestionsWrapper>
);

export default Questions;
