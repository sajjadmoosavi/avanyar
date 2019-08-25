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

const Post = ({ data }) => {
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
              className="navbar-item has-text-weight-bold"
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
              className="navbar-item is-active has-text-weight-bold"
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
            <header>
              {data.post.author.name}
            </header>
            <h1
              className="is-size-3-desktop is-size-5-touch has-text-weight-bold"
              {...title}
            >
              {data.post.title}
            </h1>
            <p className="has-text-grey" {...subtitle}>{
              [
                'نوشته شده توسط',
                data.post.author[0].name,
                'در تاریخ',
                moment(data.post.createdAt).format("jD jMMMM jYYYY"),
              ].join(' ')
            }</p>
            <Img
              className="is-block image"
              fluid={data.post.cover.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={data.post.title}
              style={{
                margin: '14px 0 18px 0',
                height: 320,
              }}
            />
            <p
              className="content is-size-5-desktop"
              dangerouslySetInnerHTML={{
                __html: data.post.content.childMarkdownRemark.html,
              }}
            />
          </article>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <article className="media">
                <figure className="media-left">
                  <Img
                    fixed={data.post.author[0].avatar.fixed}
                    style={{ 'border-radius': '50%' }}
                  />
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong style={{ marginLeft: 12 }}>
                        {data.post.author[0].name}
                      </strong>
                      <small>{moment(data.post.createdAt).format('jYYYY/jM/jD')}</small>
                    </p>
                    <p className="is-block">{data.post.author[0].bio}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer siteMetadata={data.seo.siteMetadata} logo={data.logo} map={data.map} />
    </>
  );
}

export default Post;

export const pageQuery = graphql`
query($slug: String!) {
  post: contentfulPost(slug: { eq: $slug }) {
    title
    slug
    content {
      childMarkdownRemark {
        html
      }
    }
    author {
      name
      bio
      avatar {
        fixed(width: 64, height: 64) {
          base64
          src
          srcSet
          height
          width
        }
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
    createdAt
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
      fixed(height: 320, width: 480) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;