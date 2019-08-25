import React from "react";
import { Link, graphql } from "gatsby";
import { Footer, SEO, Logo } from "../components"
import { Helmet } from "react-helmet";
import { useState } from "react";
import classNames from "classnames";
import { css } from 'glamor';
import "../styles/bulma-rtl.scss";

const moment = require('moment-jalaali');
moment.loadPersian({
  usePersianDigits: true,
});

const Post = ({ data }) => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

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
          {
            data.posts.edges.map(({ node }) => (
              <a href={`/blog/${node.slug}`} key={node.id}>
                <article className="card" style={{ marginBottom: 48 }}>
                  <div className="card-image">
                    <figure className="image is-3by1">
                      <img src={node.cover.file.url} alt={node.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h2 className="title is-size-5">
                      {node.title}
                    </h2>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-32x32" style={{ display: 'inline-block' }}>
                          <img className="is-rounded" src={node.author[0].avatar.file.url} />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <strong>{node.author[0].name}</strong>
                          <p>
                            <small>{moment(node.createdAt).format("jD jMMMM jYYYY")}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))
          }
        </div>
      </section>
      <Footer siteMetadata={data.seo.siteMetadata} logo={data.logo} />
    </>
  );
}

export default Post;

export const pageQuery = graphql`
query {
          posts: allContentfulPost {
          edges {
        node {
          id
        createdAt
        title
        slug
        cover {
          file {
        url
      }
    }
        author {
          name
          avatar {
          file {
        url
      }
    }
  }
}
}
}
  logo: file(relativePath: {eq: "icon-face.png" }) {
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