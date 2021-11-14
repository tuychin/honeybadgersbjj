import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import anime from 'animejs/lib/anime.es';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { openContactModal } from '../../components/ContactModal/contactModalSlice';

const animateBackground = (target) => {
  anime({
    targets: target,
    easing: 'easeInOutQuad',
    scale: {
      value: [1, 1.2],
      duration: 16000,
    },
    translateX: {
      value: '-50%',
      duration: 0,
    },
    translateY: {
      value: '-50%',
      duration: 0,
    },
  });
};

const ShowcaseWrapper = styled('section')(() => ({
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

const StyledImage = styled('img')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  objectFit: 'cover',
  height: '100%',
  width: '100%',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  textAlign: 'center',
  [theme.breakpoints.between('xs', 'md')]: {
    marginBottom: theme.spacing(3),
  },
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  minHeight: '568px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

const Showcase = () => {
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

  const { title, description, image } = data.markdownRemark.frontmatter.mainpitch;
  const dispatch = useDispatch();
  const imageRef = useRef(null);

  useEffect(() => {
    animateBackground(imageRef.current);
  }, []);

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <ShowcaseWrapper>
      <StyledImage ref={imageRef} src={image} alt="background-image" />
      <Overlay />
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
