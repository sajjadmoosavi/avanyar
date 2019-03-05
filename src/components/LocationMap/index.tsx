import React from 'react';
import Img from 'gatsby-image';

export const LocationMap = ({ image, address }) => (
  <Img
    fixed={image.childImageSharp.fixed}
    alt={address}
    title={address}
  />
);