'use strict';

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                draft
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const {edges} = result.data.allMarkdownRemark

  edges.forEach((edge, index) => {
    const previous = index === edges.length - 1 ? null : edges[index + 1].node
    const next = index === 0 ? null : edges[index - 1].node

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/blog-edge.js`),
      context: {
        slug: edge.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}