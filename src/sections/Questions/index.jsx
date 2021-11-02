import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import questionsMock from './mock-data';

const QuestionsWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

const QuestionsInner = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Questions = () => (
  <QuestionsWrapper>
    <Typography
      sx={{
        mb: {
          xs: 5,
          md: 8,
        },
      }}
      variant="h2"
      component="h2"
    >
      Вопросы
    </Typography>
    <QuestionsInner>
      {questionsMock.map(({ question, answer }) => (
        <Accordion sx={{ width: '100%' }} key={question}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h6"
              component="div"
            >
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </QuestionsInner>
  </QuestionsWrapper>
);

export default Questions;
