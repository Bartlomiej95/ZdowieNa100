const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const articlePostTemplate = path.resolve('./src/layouts/ArticleContentPage.js');
    const result = await graphql(`
    query queryCMSPage {
        allDatoCmsArticle {
          nodes {
            title
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

    result.data.allDatoCmsArticle.nodes.forEach( post => {

        

        const slugifiedTitle = slugify(post.title, {lower: true});
        const slugifiedLabel = slugify(post.label, {lower: true});
      
        const labelNameAfterGenerate = labelNameGenerate(slugifiedLabel);
        console.log(labelNameAfterGenerate);

        createPage({
            path: `${labelNameAfterGenerate}/${slugifiedTitle}`,
            component: articlePostTemplate,
            context: {
              post
            }
           
        });
    })
    
}

const labelNameGenerate = (label) => {
  if(label === "odzywianie"){
    return "nutrition"
  } else if( label === "ruch"){
    return "exercise"
  } else if( label === "nawyki"){
    return "habits"
  } else if( label === "zdrowy-duch"){
    return "healthy-spirit"
  }
}