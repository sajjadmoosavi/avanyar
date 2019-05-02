import React from "react";

export const ServiceTile = ({ services }) => {
  return (
    <div className="tile is-ancestor">
      {
        services.edges.map((item) => (
          <div className="tile is-parent" key={item.node.id}>
            <article className="tile is-child notification is-warning">
              <p className="title">{item.node.title}</p>
              <p className="subtitle">{item.node.subtitle}</p>
              <figure className="is-inline-block image is-128x128">
                <img src={item.node.thumbnail.file.url} />
              </figure>
            </article>
          </div>
        ))
      }
    </div>
  );
};