import React from 'react';
import './index.scss';
import './bulma-rtl.scss';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

export const Container = ({ children, logo }) => (
  <>
    <Helmet
      htmlAttributes={{
        dir: "rtl",
      }}
    >
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <section className="hero is-primary is-medium is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a>
                <div className="level is-mobile" style={{margin: '6px 0'}}>
                  <div className="level-item">
                    <Img
                      fixed={logo.childImageSharp.fixed}
                      title="آوان‌یار"
                      alt="آوان‌یار"
                    />
                  </div>
                  <div className="level-item">
                    <h1 className="title">
                      آوان‌یار
                    </h1>
                  </div>
                </div>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">خدمات</a>
                <a className="navbar-item">روش‌کار</a>
                <a className="navbar-item">تماس</a>
                <a className="navbar-item">بلاگ</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">ارائه راه‌کارهای امنیتی و هوشمندسازی</h2>
          <h2 className="subtitle">برای خانه، محل کار و سازمان شما</h2>
        </div>
      </div>
    </section>
    {children}
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          تمامی حقوق مادی و معنوی به <a href="/" title="آوان‌یار">آوان‌یار</a> تعلق دارد.
        </p>
      </div>
    </footer>
  </>
)