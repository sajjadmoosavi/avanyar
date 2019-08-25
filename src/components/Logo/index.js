import React from 'react';
import Img from 'gatsby-image';
import classNames from "classnames";

export const Logo = ({ image, siteMetadata, reverse }) => (
  <div className="level is-mobile" style={{ margin: '6px 0', maxWidth: 136 }}>
    <div className="level-item">
      <Img
        fixed={image.childImageSharp.fixed}
        title={siteMetadata.name}
        alt={siteMetadata.name}
      />
    </div>
    <div className="level-item">
      <h1 className={classNames("title", {
        'has-text-dark': !reverse,
        'has-text-white': reverse,
      })}>
        {siteMetadata.name}
      </h1>
    </div>
  </div>
);