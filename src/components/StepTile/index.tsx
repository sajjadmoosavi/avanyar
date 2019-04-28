import { AllContentfulModel, Step } from "../../models";
import React from "react";
import persianJs from "persianjs";

interface Props {
  steps: AllContentfulModel<Step>;
}

export const StepTile = ({ steps }: Props) => {
  return (
    <div className="columns">
      {
        steps.edges.map((item) => (
          <div className="column" key={item.node.id}>
              <article>
                <figure className="is-inline-block image is-64x64">
                  <img src={item.node.picture.file.url} />
                </figure>
                <p className="is-size-4 has-text-weight-bold">{persianJs(item.node.order).englishNumber().toString()}.&nbsp;{item.node.name}</p>
                <p className="">{item.node.description}</p>
              </article>
          </div>
        ))
      }
    </div>
  );
};