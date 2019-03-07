import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/SEO"
import { graphql } from "gatsby";
import { ServiceTile } from "../components/ServiceTile";
import { AllContentfulModel, Service } from "../models";
import { ContactForm } from "../components/ContactForm";
import { Logo } from "../components/Logo";
import { LocationMap } from "../components/LocationMap";

type Props = {
  data: {
    services: AllContentfulModel<Service>;
    logo: any;
    seo: any;
    map: any;
  }
}



const IndexPage: React.SFC<Props> = ({ data }) => {
  return (
    <Container logo={data.logo} seo={data.seo}>
      <SEO seo={data.seo}/>
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
          <div className="container has-text-centered">
            <h1 className="title">
              روش‌کار
            </h1>
            <h2 className="subtitle">
              مراحلی که از درخواست شما تا تحویل کار طی می‌شود
            </h2>
          </div>
        </div>
      </section>
      <section id="contact" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              راه‌های تماس با ما
            </h1>
            <br />
            <div className="tile is-ancestor">
              <div className="tile is-6 is-parent">
                <div className="tile is-child">
                  <p>برای ما بنویسید، در کوتاه‌ترین زمان ممکن با شما تماس خواهیم گرفت.</p>
                  <br />
                  <ContactForm />
                </div>
              </div>
              <div className="tile is-6 is-parent">
                <div className="tile is-child">
                  <Logo seo={data.seo} image={data.logo}/>
                  <p className="is-size-5 has-text-weight-semibold has-text-grey-dark">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  <p className="is-size-6 has-text-grey-dark">تهران، اتوبان اشرفی اصفهانی، ساختمان زمرد</p>
                  <p className="is-size-6 has-text-grey-dark">
                    <a href="mailto:avanyar@outlook.com">avanyar@outlook.com</a>
                  </p>
                  <LocationMap
                    image={data.map}
                    address="تهران، اتوبان اشرفی اصفهانی، ساختمان زمرد"
                  />
                </div>
              </div>
            </div>
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