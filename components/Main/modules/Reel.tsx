import { FunctionComponent } from "react";
import { ReelProps } from "../types/main.types";
import Mint from "./Mint";

const Reel: FunctionComponent<ReelProps> = ({ reelNumber }): JSX.Element => {
  switch (reelNumber) {
    case 1:
      return <Mint />;

    default:
      return <Mint />;
  }
};

export default Reel;
