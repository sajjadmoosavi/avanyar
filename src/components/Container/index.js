import React from 'react';
import './index.scss';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import { Logo, SEO, Footer } from "..";

export const Container = ({ children, logo, seo }) => (
  <>
    <Helmet
      htmlAttributes={{
        dir: 'rtl',
        class: 'has-navbar-fixed-top',
      }}
    >
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <SEO seo={seo} />
    <nav className="navbar is-fixed-top is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link
            activeClass="is-active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-52}
            duration={500}
          >
            <Logo siteMetadata={seo.siteMetadata} image={logo} />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <Link
              className="navbar-item"
              activeClass="is-active"
              to="services"
              spy={true}
              smooth={true}
              offset={-52}
              duration={500}
            >
              خدمات
                </Link>
            <Link
              className="navbar-item"
              activeClass="is-active"
              to="workflow"
              spy={true}
              smooth={true}
              offset={-52}
              duration={500}
            >
              روش‌کار
                </Link>
            <Link
              className="navbar-item"
              activeClass="is-active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-52}
              duration={500}
            >
              تماس
                </Link>
            <a className="navbar-item">بلاگ</a>
          </div>
        </div>
      </div>
    </nav>
    <section id="hero" className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">ارائه راه‌کارهای امنیتی و هوشمندسازی</h2>
          <h2 className="subtitle">برای خانه، محل کار و سازمان شما</h2>
        </div>
      </div>
    </section>
    {children}
    <Footer logo={logo} siteMetadata={seo.siteMetadata} />
  </>
)