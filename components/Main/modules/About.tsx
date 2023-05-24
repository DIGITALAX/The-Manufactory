import { FunctionComponent } from "react";
import { AboutProps } from "../types/main.types";

const About: FunctionComponent<AboutProps> = ({ reelNumber }): JSX.Element => {
  switch (reelNumber) {
    case 1:
      return (
        <div className="relative w-3/4 h-fit text-white font-clashM text-4xl uppercase break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          ipsum metus, at convallis erat condimentum sed. Duis sagittis nisl et
          augue congue, ac eleifend metus consectetur. Vestibulum bibendum, eros
          at volutpat consequat, odio lorem feugiat justo, id consectetur urn
        </div>
      );

    default:
      return (
        <div className="relative w-3/4 h-fit text-white font-clashM text-2xl uppercase break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          ipsum metus, at convallis erat condimentum sed. Duis sagittis nisl et
          augue congue, ac eleifend metus consectetur. Vestibulum bibendum, eros
          at volutpat consequat, odio lorem feugiat justo, id consectetur urn
        </div>
      );
  }
};

export default About;
