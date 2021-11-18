import { useStaticQuery, graphql } from 'gatsby';
import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

function useTheme() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "theme"}}) {
        frontmatter {
          colors {
            accentuatingColor
            bgColor
            mainColor
            textColor
          }
        }
      }
    }
  `);

  const {
    bgColor,
    mainColor,
    accentuatingColor,
    textColor,
  } = data.markdownRemark.frontmatter.colors;

  // const bgColor = '#222831';
  // const mainColor = '#393E46';
  // const accentuatingColor = '#26FC58';
  // const textColor = '#EEEEEE';

  const theme = createTheme({
    palette: {
      common: {
        black: bgColor,
        white: textColor,
      },
      background: {
        default: bgColor,
        paper: mainColor,
      },
      text: {
        primary: textColor,
        secondary: bgColor,
      },
      primary: {
        light: accentuatingColor,
        main: accentuatingColor,
        dark: accentuatingColor,
        contrastText: bgColor,
      },
      secondary: {
        light: mainColor,
        main: mainColor,
        dark: mainColor,
        contrastText: textColor,
      },
    },
    typography: {
      fontFamily: 'Montserrat, Roboto, sans-serif',
      fontWeight: 500,
      button: {
        fontFamily: 'Montserrat, Roboto, sans-serif',
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: 'Montserrat, Roboto, sans-serif',
        fontWeight: 700,
      },
      h1: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
      h4: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
      h5: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
      h6: {
        fontFamily: 'Oswald, Roboto, sans-serif',
        fontWeight: 700,
      },
    },
  });

  return responsiveFontSizes(theme);
}

export default useTheme;
