import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useInstPosts = () => {
  const [instPosts, setInstPosts] = useState(null);

  const { userInstPosts } = useStaticQuery(graphql`
    {
      userInstPosts {
        instPosts {
          node {
            thumbnail_src
            shortcode
            edge_media_to_caption {
              edges {
                node {
                  text
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const allInstPostsData = userInstPosts.instPosts.map(({
      node: {
        thumbnail_src: thumbnailSrc,
        shortcode: postId,
        edge_media_to_caption: captionData,
      },
    }) => ({
      postId,
      thumbnailSrc,
      description: captionData.edges[0].node.text,
    }));

    setInstPosts(allInstPostsData);
  }, []);

  return { instPosts };
};

export default useInstPosts;
