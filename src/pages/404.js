import React from "react"

import { SEO } from "../components/SEO"

const NotFoundPage = ({ data }) => (
  <>
    <SEO title="404: Not found" seo={data.seo} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage;

export const query = graphql`
query {
  logo: file(relativePath: { eq: "icon-face.png" }) {
    childImageSharp {
      fixed(height: 40, width: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  seo: site {
    siteMetadata {
      name
      title
      description
      author
      keywords
    }
  }
}
`;