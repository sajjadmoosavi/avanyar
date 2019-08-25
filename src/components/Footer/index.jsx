import React from "react";
import Img from 'gatsby-image';
import './style.scss';

export const Footer = ({ siteMetadata, logo, map }) => (
  <footer className="footer">
    <div className="columns">
      <div className="column brand">
        <div className="logo is-mobile">
          <Img
            fixed={logo.childImageSharp.fixed}
            title={siteMetadata.name}
            alt={siteMetadata.name}
            style={{ marginLeft: 6 }}
          />
          <span className="is-size-3 has-text-weight-bold	">
            {siteMetadata.name}
          </span>
        </div>
        <p className="description">
          {siteMetadata.description}
        </p>
      </div>
      <div className="column">
        <Img
          fixed={map.childImageSharp.fixed}
          title="فارس، شیراز، چهار راه پارامونت مجتمع تجاری خلیج فارس، طبقه دوم اداری واحد ۱۳"
          alt="فارس، شیراز، چهار راه پارامونت مجتمع تجاری خلیج فارس، طبقه دوم اداری واحد ۱۳"
          style={{ marginLeft: 6 }}
        />
      </div>
      <div className="column">
        <p>
          <span className="has-text-weight-medium">
            فارس، شیراز، چهار راه پارامونت
          <br />
            مجتمع تجاری خلیج فارس، طبقه دوم اداری واحد ۱۳
          </span>
          <br />
          <br />
          <span className="is-size-5 has-text-weight-medium">۰۷۱-۹۱۰۰۲۲۰۳</span>
          <br />
          <span className="is-size-5 has-text-weight-medium">۰۹۹۰-۳۳۳۷۵۰۵</span>
          <br />
          <br />
          <a href="mailto:hi@avanyar.ir">hi@avanyar.ir</a>
        </p>
      </div>
    </div>
    <div className="level">
      <div className="level-item">
        <p className="has-text-centered">
          تمامی حقوق مادی و معنوی به <a href="/"
            title="آوان‌یار" > آوان‌یار </a> تعلق دارد.
          </p>
      </div>
    </div>
  </footer >
);