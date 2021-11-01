const instagram = require('instagram-scraping');

// exports.createPages = async ({ actions: { createPage } }) => {
//   const instData = await instagram.scrapeUserPage('moscowbjj');

//   createPage({
//     path: '/',
//     component: require.resolve('./src/pages/index.js'),
//     context: { instData },
//   });
// };

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const { medias } = await instagram.scrapeUserPage('moscowbjj');
  const mediasPortion = medias.slice(0, 6);

  const nodeMeta = {
    id: createNodeId('userInstPosts'),
    parent: null,
    children: [],
    internal: {
      type: 'UserInstPosts',
      contentDigest: createContentDigest(mediasPortion),
    },
  };

  const nodeData = {
    instPosts: mediasPortion,
  };

  const node = { ...nodeData, ...nodeMeta };
  createNode(node);
};
