/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "seo"}}) {
        frontmatter {
          seoUrl
          seoTitle
          seoDescription
          seoImage
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter;
};

const SEO = ({
  title = null,
  pageTitle = null,
  description = null,
  image = null,
  isArticle = false,
}) => {
  const { pathname } = useLocation();

  const {
    seoUrl,
    seoTitle,
    seoDescription,
    seoImage,
  } = useData();

  const seo = {
    title: title || (pageTitle ? `${pageTitle} | ${seoTitle}` : seoTitle),
    description: description || seoDescription,
    image: `${seoUrl}${image || seoImage}`,
    url: `${seoUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />

      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {isArticle && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isArticle: PropTypes.bool,
};
