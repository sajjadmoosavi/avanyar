import React from 'react';
import Img from 'gatsby-image';

export const Logo = ({ image, siteMetadata }) => (
  <div className="level is-mobile" style={{ margin: '6px 0', maxWidth: 136 }}>
    <div className="level-item">
      <Img
        fixed={image.childImageSharp.fixed}
        title={siteMetadata.name}
        alt={siteMetadata.name}
      />
    </div>
    <div className="level-item">
      <h1 className="title has-text-dark">
        {siteMetadata.name}
      </h1>
    </div>
  </div>
);