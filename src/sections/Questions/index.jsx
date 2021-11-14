import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "index-page"}}) {
        frontmatter {
          qa {
            question
            answer
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter.qa;
};

const QuestionsWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const QuestionsInner = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Questions = () => {
  const questions = useData();

  return (
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
        {questions.map(({ question, answer }) => (
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
};

export default Questions;
