import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
  PAGES,
  TelNumber,
  Telegram,
  Instagram,
} from '../../const';

const QuestionsWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
  [theme.breakpoints.between('xs', 'sm')]: {
    flexDirection: 'column',
  },
}));

const Questions = () => (
  <QuestionsWrapper sx={{ boxShadow: 3 }}>
    <Box sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'row',
      },
    }}
    >
      <Box sx={{
        mr: {
          xs: 0,
          sm: 5,
        },
        mb: {
          xs: 3,
          sm: 0,
        },
      }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Контакты:
        </Typography>

        <Link href={TelNumber.HREF}>
          {TelNumber.LABEL}
        </Link>

        <Box sx={{ marginLeft: '-10px' }}>
          <Link href={Instagram.HREF} target="_blank" rel="noopener">
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
          </Link>

          <Link href={Telegram.HREF} target="_blank" rel="noopener">
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
          {PAGES.map(({ name, href }) => (
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
      mt: { xs: 6, sm: 0 },
    }}
    >
      <Link href="/privacy-policy">
        <Typography variant="body2">Политика конфенденциальности</Typography>
      </Link>

      <Link href="/cookie-policy">
        <Typography variant="body2">Политика Cookie</Typography>
      </Link>

      <Typography
        sx={{
          position: { xs: 'relative', sm: 'absolute' },
          bottom: 0,
          right: 0,
          textAlign: { xs: 'left', sm: 'right' },
          mt: 3,
        }}
        variant="caption"
      >
        {`©${new Date().getFullYear()} Honey badgers BJJ`}
      </Typography>
    </Box>
  </QuestionsWrapper>
);

export default Questions;
