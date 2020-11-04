const path = require('path');

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/layouts/CategoryPage.js');
    const result = await graphql(`
    query queryCMSPage {
        allDatoCmsArticle {
          nodes {
            title
            paragraph
            label
            content {
              ... on DatoCmsContentImage {
                image {
                  url
                }
              }
              ... on DatoCmsContentHeading {
                heading
              }
              ... on DatoCmsContentParagraph {
                paragraph
              }
            }
          }
        }
      }
    
    `);

}