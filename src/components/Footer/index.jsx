import React from 'react';
import PropTypes from 'prop-types';
import parsePhoneNumber from 'libphonenumber-js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SocialIcon from '../SocialIcon';

import InnerLink from '../InnerLink';
import { pages } from '../../const';

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

const Footer = ({ socials, telNumber }) => (
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

        <Link href={`tel:${telNumber}`}>
          {parsePhoneNumber(telNumber).formatNational()}
        </Link>

        <Box sx={{ marginLeft: { xs: 0, sm: '-10px' } }}>
          {socials.map(({ href, name }) => <SocialIcon href={href} name={name} key={name} />)}
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

Footer.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string,
  })),
  telNumber: PropTypes.string,
};

export default Footer;
