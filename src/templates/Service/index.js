import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { Footer, SEO, Logo } from "../../components"
import { Helmet } from "react-helmet";
import { useState } from "react";
import classNames from "classnames";
import { css } from 'glamor';
import "../../styles/main.scss";
import "../../styles/bulma-rtl.scss";


const moment = require('moment-jalaali');
moment.loadPersian({
  usePersianDigits: true,
});

const Service = ({ data }) => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const title = css({
    marginBottom: '8px',
  });

  const subtitle = css({
    marginBottom: '4px',
  });

  const post = css({
    marginBottom: '24px'
  });

  const main = css({
    margin: '36px 0 48px 0',
  });

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
      <nav className="container is-fluid navbar is-fixed-top">
        <div className="navbar-brand" role="navigation" aria-label="main navigation">
          <Link
            to="/"
          >
            <Logo
              siteMetadata={data.seo.siteMetadata}
              image={data.logo}
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
              className="navbar-item is-active has-text-weight-bold"
              to="/#services"
            >
              خدمات
        </Link>
            <Link
              className="navbar-item has-text-weight-bold"
              to="#/workflow"
            >
              روش‌کار
        </Link>
            <Link
              className="navbar-item has-text-weight-bold"
              to="#/contact"
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
      <section className="container">
        <div {...main}>
          <article {...post}>
            <h1
              className="is-size-3-desktop is-size-5-touch has-text-weight-bold"
              {...title}
            >
              {data.service.title}
            </h1>
            <h2
              className="is-size-5-desktop is-size-6-touch has-text-grey	"
              {...subtitle}
            >
              {data.service.subtitle}
            </h2>
            <Img
              className="is-block image"
              fluid={data.service.cover.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={data.service.title}
              style={{
                margin: '14px 0 18px 0',
                height: 320,
              }}
            />
            <p
              className="content is-size-5-desktop"
              dangerouslySetInnerHTML={{
                __html: data.service.description.childMarkdownRemark.html,
              }}
            />
          </article>
        </div>
      </section>
      <Footer siteMetadata={data.seo.siteMetadata} logo={data.logo} map={data.map} />
    </>
  );
}

export default Service;

export const pageQuery = graphql`
query($slug: String!) {
  service: contentfulService(slug: { eq: $slug }) {
    title
    subtitle
    slug
    description {
      childMarkdownRemark {
        html
      }
    }
    cover {
      fluid(maxHeight: 640) {
        srcSet
        base64
        sizes
        src
      }
    }
  }
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
  map: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fluid(maxHeight: 320, maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;