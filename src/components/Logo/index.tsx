import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';

export const Logo = ({ image, seo, reverse }) => (
  <div className="level is-mobile" style={{ margin: '6px 0', maxWidth: 136 }}>
    <div className="level-item">
      <Img
        fixed={image.childImageSharp.fixed}
        title={seo.siteMetadata.name}
        alt={seo.siteMetadata.name}
      />
    </div>
    <div className="level-item">
      <h1 className={classNames("title", reverse ? "has-text-white" : "has-text-dark")}>
        {seo.siteMetadata.name}
      </h1>
    </div>
  </div>
);