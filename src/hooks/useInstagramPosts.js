import { useState, useEffect } from 'react';

const instagram = require('instagram-scraping');

const useInstagramPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const userPageData = await instagram.scrapeUserPage('moscowbjj');

        setInstagramPosts(userPageData);
      } catch (err) {
        console.error('[Error handler result]:', err);
      }
    })();
  }, []);

  return { instagramPosts };
};

export default useInstagramPosts;
