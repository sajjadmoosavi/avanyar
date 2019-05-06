import React from "react";
import { Link, graphql } from "gatsby";
import { Footer, SEO, Logo } from "../../components"
import { Helmet } from "react-helmet";
import { useState } from "react";
import classNames from "classnames";
import { css } from 'glamor';
import "../../styles/bulma-rtl.scss";

const moment = require('moment-jalaali');
moment.loadPersian({
  usePersianDigits: true,
});

const Post = ({ data }) => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const cover = css({
    margin: '14px 0 18px 0',
  });

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
            to="/home"
          >
            <Logo
              seo={data.seo}
              name={data.seo.siteMetadata.name}
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
          <div class="navbar-start">
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
            <p className="has-text-grey" {...subtitle}>{moment(data.post.createdAt).format("jD jMMMM jYYYY ساعت hh:mm A")}</p>
            <figure className="is-block image" {...cover}>
              <img src={data.post.cover.file.url} />
            </figure>
            <p
              className="content is-size-5-desktop"
              dangerouslySetInnerHTML={{
                __html: data.post.content.childMarkdownRemark.html,
              }}
            />
          </article>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <article className="media ">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img className="is-rounded" src={data.post.author[0].avatar.file.url} />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-size-5" {...title}>{data.post.author[0].name}</h1>
                    <p className="is-block">{data.post.author[0].bio}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
        file {
          url
        }
      }
    }
    cover {
      file {
        url
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
}
`;