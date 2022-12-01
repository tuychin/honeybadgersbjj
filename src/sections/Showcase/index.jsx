import React from 'react';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { openContactModal } from '../../components/ContactModal/contactModalSlice';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "index-page"}}) {
        frontmatter {
          mainpitch {
            title
            description
            image
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter.mainpitch;
};

const ShowcaseWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  minHeight: '568px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '800px',
  zIndex: 0,
  [theme.breakpoints.between('xs', 'md')]: {
    width: '100%',
    padding: '10px',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  color: theme.palette.text.secondary,
  textAlign: 'center',
  [theme.breakpoints.between('xs', 'md')]: {
    marginBottom: theme.spacing(3),
  },
}));

const Showcase = () => {
  const { title, description, image } = useData();
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <ShowcaseWrapper sx={{ backgroundImage: `url(${image})` }}>
      <ContentWrapper>
        <StyledTypography variant="h1">
          {title}
        </StyledTypography>
        <StyledTypography>
          {description}
        </StyledTypography>
        <Button size="large" variant="contained" color="primary" onClick={handleContactModalOpen}>
          Как записаться?
        </Button>
      </ContentWrapper>
    </ShowcaseWrapper>
  );
};

export default Showcase;
