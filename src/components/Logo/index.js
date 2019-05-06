import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';

export const Logo = ({ image, name, reverse }) => (
  <div className="level is-mobile" style={{ margin: '6px 0', maxWidth: 136 }}>
    <div className="level-item">
      <Img
        fixed={image.childImageSharp.fixed}
        title={name}
        alt={name}
      />
    </div>
    <div className="level-item">
      <h1 className={classNames("title", reverse ? "has-text-white" : "has-text-dark")}>
        {name}
      </h1>
    </div>
  </div>
);