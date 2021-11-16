import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import InnerLink from '../InnerLink';
import {
  pages,
  TelNumber,
  Telegram,
  Instagram,
} from '../../const';

const FooterWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  marginTop: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
  [theme.breakpoints.between('xs', 'sm')]: {
    flexDirection: 'column',
    paddingTop: theme.spacing(6),
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  [theme.breakpoints.between('xs', 'sm')]: {
    alignItems: 'center',
  },
}));

const Footer = () => (
  <FooterWrapper sx={{ boxShadow: 3 }}>
    <Box sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'row',
      },
    }}
    >
      <FooterSection sx={{
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

        <Box sx={{ marginLeft: { xs: 0, sm: '-10px' } }}>
          <Link href={Instagram.HREF} target="_blank" rel="noopener noreferrer nofollow">
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
          </Link>

          <Link href={Telegram.HREF} target="_blank" rel="noopener noreferrer nofollow">
            <IconButton color="primary">
              <TelegramIcon />
            </IconButton>
          </Link>
        </Box>
      </FooterSection>

      <FooterSection>
        <Typography variant="h6" component="div" gutterBottom>
          Страницы:
        </Typography>

        <FooterSection>
          {pages.map(({ name, href }) => (
            <InnerLink to={href} key={`${name}${href}`}>
              {name}
            </InnerLink>
          ))}
        </FooterSection>
      </FooterSection>
    </Box>

    <Box sx={{
      display: 'flex',
      alignItems: { xs: 'center', sm: 'flex-end' },
      justifyContent: 'flex-end',
      flexDirection: 'column',
      mt: { xs: 5, sm: 0 },
    }}
    >
      <Typography
        sx={{ textAlign: { xs: 'left', sm: 'right' } }}
        variant="caption"
      >
        {`©${new Date().getFullYear()} Honey badgers BJJ`}
      </Typography>
    </Box>
  </FooterWrapper>
);

export default Footer;
