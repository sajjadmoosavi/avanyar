/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        posts: allContentfulPost {
          edges {
            node {
              slug
            }
          }
        },
        services: allContentfulService {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }

    // Resolve the paths to our template
    const blogPostTemplate = path.resolve("./src/templates/Post/index.js");
    const serviceDescriptionTemplate = path.resolve("./src/templates/Service/index.js");

    // Then for each result we create a page.
    result.data.posts.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}/`,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });

    result.data.services.edges.forEach(edge => {
      createPage({
        path: `/service/${edge.node.slug}/`,
        component: slash(serviceDescriptionTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};