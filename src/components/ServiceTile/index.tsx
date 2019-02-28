import { Service, AllContentfulModel } from "../../models";
import React from "react";

interface Props {
  services: AllContentfulModel<Service>;
}

export const ServiceTile = ({ services }: Props) => {
  return (
    <div className="tile is-ancestor">
      {
        services.edges.map((item) => (
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">{item.node.title}</p>
              <p className="subtitle">{item.node.subtitle}</p>
              <figure className="image is-16by9">
                <img src={item.node.thumbnail.file.url} />
              </figure>
            </article>
          </div>
        ))
      }
    </div>
  );
};