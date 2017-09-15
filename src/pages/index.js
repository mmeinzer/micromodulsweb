import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div style={{maxWidth: "36.4rem", position: "relative", margin: "0px auto"}}>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>
        {posts.map(post => {
          if (post.node.frontmatter.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.frontmatter.path
            return (
              <article key={post.node.frontmatter.path} style={{boxShadow: "rgba(25, 17, 34, 0.05) 0px 3px 10px", background: "white", padding: "2.1rem 3.15rem", margin: "0 -2rem 1rem -2rem"}}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </article>
            )
          }
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
