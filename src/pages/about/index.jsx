import React from 'react';
import Helmet from 'react-helmet';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '../../images/logo.png';

const AboutInner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Logo = styled('img')(({ theme }) => ({
  float: 'right',
  maxWidth: '200px',
  margin: '0 10px',
  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '100px',
  },
}));

const About = () => (
  <Container>
    <Helmet title="О нас | Honey badgers BJJ" />
    <AboutInner>
      <AboutTitle variant="h2" component="h1">
        О нас
      </AboutTitle>
      <Logo src={logo} alt="Honey Badgers BJJ Logo" />
      <Typography>
        Мы полностью сконцентрированы на джиу-джитсу и продвижении здорового образа жизни.
        В наших залах тренируются как действующие спортсмены, так и люди, которые просто
        хотят быть в отличной физической форме и обрести чуть больше уверенности в себе.
        <br />
        <br />
        Moscow Jiu-Jitsu существует с 2015 года, инструкторы обладают большим опытом
        преподавания и разработки программ обучения, а спортсмены занимают призовые места
        в индивидуальном и командном зачетах на крупнейших соревнованиях национального
        и международного уровня.
        <br />
        <br />
        Наша команда официально входит в Федерацию Джиу-Джитсу России, что дает
        возможность спортсменам выступать на официальных соревнованиях и продвигаться
        по лестнице спортивных званий, утвержденных Министерством спорта Российской Федерации.
        <br />
        <br />
        Также, Moscow Jiu-Jitsu является официальным представительством международной
        команды Alliance/Marcelo Garcia Jiu-Jitsu в России (12-ти кратный чемпион мира в
        командном зачете), что открывает нашим спортсменам возможность участия в соревнованиях
        международного уровня по версиям IBJJF и AJP. Наши инструкторы ежегодно повышают
        квалификацию в академии Marcelo Garcia Jiu-Jitsu в Нью-Йорке, а тренеры академии
        проводят семинары в Москве.
      </Typography>
    </AboutInner>
  </Container>
);

export default About;
