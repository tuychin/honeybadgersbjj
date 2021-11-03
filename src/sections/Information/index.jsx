import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const InformationWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.grey[900]}`,
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
  },
}));

const InformationInner = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  [theme.breakpoints.between('xs', 'lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const InformationItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '300px',
  padding: theme.spacing(3),
  [theme.breakpoints.between('xs', 'lg')]: {
    width: '100%',
    '&:not(:last-child)': {
      marginBottom: theme.spacing(5),
    },
  },
}));

const Information = () => (
  <InformationWrapper sx={{ boxShadow: 3 }}>
    <InformationInner>
      <InformationItem>
        <RoomIcon sx={{ mb: 3 }} color="primary" fontSize="large" />
        <Typography>
          Адрес: г. Москва, Улица Ленинская Слобода, 19
          <br />
          (м. Автозаводская)
        </Typography>
      </InformationItem>

      <InformationItem>
        <AccessTimeFilledIcon sx={{ mb: 3 }} color="primary" fontSize="large" />
        <Typography>
          Расписание:
          <br />
          ПН, СР, ПТ - с 20:00 до 22:00
        </Typography>
      </InformationItem>

      <InformationItem>
        <MonetizationOnIcon sx={{ mb: 3 }} color="primary" fontSize="large" />
        <Typography>
          Абонемент:
          <br />
          6.000₽/месяц
        </Typography>
      </InformationItem>
    </InformationInner>
  </InformationWrapper>
);

export default Information;
