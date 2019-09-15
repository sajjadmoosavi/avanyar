import React from "react";
import { useState } from "react";
import { SEO } from "../components/SEO"
import { graphql, Link } from "gatsby";
import { ServiceTile, Footer, ContactForm, StepTile, Logo } from "../components";
import { Helmet } from "react-helmet";
import classNames from "classnames";


const IndexPage = ({ data }) => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <>
      <Helmet
        htmlAttributes={{
          dir: 'rtl',
          class: 'has-navbar-fixed-top',
        }}
      >
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <SEO seo={data.seo} />
      <nav className="navbar is-primary is-fixed-top">
        <div className="navbar-brand" role="navigation" aria-label="main navigation">
          <Link
            to="/"
          >
            <Logo
              siteMetadata={data.seo.siteMetadata}
              image={data.logo}
              reverse={true}
            />
          </Link>
          <a
            role="button"
            className={classNames("navbar-burger burger", burgerIsActive ? "is-active" : null)}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={() => setBurgerIsActive(!burgerIsActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenu" className={classNames("navbar-menu", burgerIsActive ? "is-active" : null)}>
          <div className="navbar-start">
            <Link
              className="navbar-item has-text-weight-bold"
              to="#services"
            >
              خدمات
        </Link>
            <Link
              className="navbar-item has-text-weight-bold"
              to="#workflow"
            >
              روش‌کار
        </Link>
            <Link
              className="navbar-item has-text-weight-bold"
              to="#contact"
            >
              تماس
        </Link>
            <Link
              className="navbar-item has-text-weight-bold"
              to="/blog"
            >
              بلاگ
        </Link>
          </div>
        </div>
      </nav >
      <section id="hero" className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">ارائه راه‌کارهای امنیتی و هوشمندسازی</h2>
            <h2 className="subtitle">برای خانه، محل کار و سازمان شما</h2>
          </div>
        </div>
      </section>
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
      <Footer siteMetadata={data.seo.siteMetadata} logo={data.logo} map={data.map} />
    </>
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
      fluid(maxHeight: 320, maxWidth: 480) {
        ...GatsbyImageSharpFluid
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