import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/SEO"
import { graphql } from "gatsby";
import { ServiceTile } from "../components/ServiceTile";
import { ContactForm } from "../components/ContactForm";
import { Logo } from "../components/Logo";
import { LocationMap } from "../components/LocationMap";
import { StepTile } from "../components/StepTile";


const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Container logo={data.logo} seo={data.seo}>
      <SEO seo={data.seo} />
      <section className="hero is-medium">
        <div id="services" className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              خدمات
            </h1>
            <h2 className="subtitle">
              رضایت، کمترین زمان و ضمانت در ارائه خدمات باعث اعتماد مشتریان به ما شده‌است
            </h2>
            <ServiceTile services={data.services} />
          </div>
        </div>
      </section>
      <section id="workflow" className="hero is-medium is-light">
        <div className="hero-body">
          <div className="container is-fluid has-text-centered">
            <h1 className="title">
              روش‌کار
            </h1>
            <h2 className="subtitle">
              مراحلی که از درخواست شما تا تحویل کار طی می‌شود
            </h2>
            <StepTile steps={data.steps} />
          </div>
        </div>
      </section>
      <section id="contact" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              راه‌های تماس با ما
            </h1>
            <h2 className="subtitle has-text-centered">
              برای ما بنویسید، در کوتاه‌ترین زمان ممکن با شما تماس خواهیم گرفت.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default IndexPage;

export const query = graphql`
query {
  logo: file(relativePath: { eq: "icon-face.png" }) {
    childImageSharp {
      fixed(height: 40, width: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  map: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fixed(height: 320, width: 320) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  services: allContentfulService ( sort:{ fields: priority, order: ASC } ) {
    edges {
      node {
        id
        slug
        title
        subtitle
        cover {
          file {
            url
          }
        }
        thumbnail {
          file {
            url
          }
        }
      }
    }
  }
  steps: allContentfulStep ( sort:{ fields: order, order: ASC } ) {
    edges {
      node {
        id
        order
        name
        description
        picture {
          file {
            url
          }
        }
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