import React from "react";
import Img from 'gatsby-image';

export const ServiceTile = ({ services }) => {
  return (
    <div className="tile is-ancestor">
      {
        services.edges.map((item) => (
          <div className="tile is-parent" key={item.node.id}>
            <a href={`/service/${item.node.slug}`} title={item.node.subtitle}>
              <article className="tile is-child box">
                <p className="title is-size-4">{item.node.title}</p>
                <p className="subtitle is-size-6">{item.node.subtitle}</p>
                <Img
                  fixed={item.node.thumbnail.fixed}
                  alt={item.node.title}
                />
              </article>
            </a>
          </div>
        ))
      }
    </div>
  );
};