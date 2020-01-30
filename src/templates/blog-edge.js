import React from "react"
import Reveal from "reveal.js"
import { graphql } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

class ReactReveal extends React.Component {
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
  const fuk = this.props.fuk;
  return(
    <div className='reveal'>
      <div className='slides' >
        <section data-markdown>
            <script type="text/template">
               {fuk}
            </script>
        </section>
      </div>
    </div>)
  }

}

const BlogTemplate = ({ data }) => {
    const { html: pageBody, rawMarkdownBody:raw} = data.markdownRemark;
    return (
      <Layout >
      <ReactReveal fuk={raw} />
      </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogTemplate