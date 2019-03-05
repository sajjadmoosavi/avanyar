import React from 'react';
import Img from 'gatsby-image';

export const Logo = ({ image, seo }) => (
  <div className="level is-mobile" style={{ margin: '6px 0', maxWidth: 136 }}>
    <div className="level-item">
      <Img
        fixed={image.childImageSharp.fixed}
        title={seo.siteMetadata.name}
        alt={seo.siteMetadata.name}
      />
    </div>
    <div className="level-item">
      <h1 className="title">
        {seo.siteMetadata.name}
      </h1>
    </div>
  </div>
);