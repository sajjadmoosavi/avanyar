import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/SEO"
import { useStaticQuery, graphql } from "gatsby";
import { ServiceTile } from "../components/ServiceTile";
import { AllContentfulModel, Service } from "../models";
import { ContactForm } from "../components/ContactForm";

type Props = {
  data: {
    services: AllContentfulModel<Service>;
    logo: any;
  }
}



const IndexPage: React.SFC<Props> = ({ data }) => {
  return (
    <Container logo={data.logo}>
      <SEO />
      <section className="hero is-medium">
        <div className="hero-body">
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
      <section className="hero is-medium is-light is-bold">
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
      <section className="hero is-medium is-bold">
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
                  <p className="is-size-4 has-text-weight-semibold">آوان‌یار</p>
                  <p className="is-size-5 has-text-weight-semibold has-text-grey-dark">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  <p className="is-size-6 has-text-weight-semibold has-text-grey-dark">تهران، اتوبان اشرفی اصفهانی، ساختمان زمرد</p>
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
}
`;