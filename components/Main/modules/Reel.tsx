import { FunctionComponent } from "react";
import { ReelProps } from "../types/main.types";
import Mint from "./Mint";

const Reel: FunctionComponent<ReelProps> = ({ reelNumber }): JSX.Element => {
  switch (reelNumber) {
    case 3:
      return <Mint image={"QmWj4j6ZmpPRMz7WZQ3dXsevATKCgE8ig7JMWecokWVR6y"} />;

    case 2:
      return <Mint image={"QmSFHVqfaK5gNuFncsMoQbtFoN3zwDbkSNnYCNc6Dg61sN"} />;

    // case 2:
    //   return <Mint image={"noise"} />;

    case 1:
      return <Mint image={"QmNYE15bvHhA9gQZXZnu8zf8fdcaAiXb6X64HhTZNAH98s"} />;

    default:
      return <Mint image={"QmPSC7JRf8YaJz6KZmWx6rRxdJpCiD2Jw4rKwxJ3fc7MGF"} />;
  }
};

export default Reel;
