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
                # Test
                Soit
                ## Test 2
            </script>
        </section>
      </div>
    </div>)
  }

}

const BlogTemplate = ({ data }) => {
    const { html: pageBody } = data.markdownRemark;
    return (
      <Layout >
      <ReactReveal fuk={pageBody} />
      </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogTemplate