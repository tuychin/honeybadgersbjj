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
  const instData = await instagram.scrapeUserPage('moscowbjj');

  const nodeMeta = {
    id: createNodeId('userInstData'),
    parent: null,
    children: [],
    internal: {
      type: 'UserInstData',
      contentDigest: createContentDigest(instData),
    },
  };

  const node = { instData, ...nodeMeta };
  createNode(node);
};
