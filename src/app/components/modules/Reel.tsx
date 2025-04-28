import { FunctionComponent, JSX } from "react";
import ReelMint from "./ReelMint";

const Reel: FunctionComponent<{ reelNumber: number }> = ({
  reelNumber,
}): JSX.Element => {
  switch (reelNumber) {
    case 4:
      return (
        <ReelMint image={"QmfCoKxKmrJw1fAgwqWh6a3MmJ1h8cv4jh2mQx15CrgyT5"} />
      );

    case 3:
      return (
        <ReelMint image={"QmWj4j6ZmpPRMz7WZQ3dXsevATKCgE8ig7JMWecokWVR6y"} />
      );

    case 2:
      return (
        <ReelMint image={"QmSFHVqfaK5gNuFncsMoQbtFoN3zwDbkSNnYCNc6Dg61sN"} />
      );

    // case 2:
    //   return <Mint image={"noise"} />;

    case 1:
      return (
        <ReelMint image={"QmNYE15bvHhA9gQZXZnu8zf8fdcaAiXb6X64HhTZNAH98s"} />
      );

    default:
      return (
        <ReelMint image={"QmPSC7JRf8YaJz6KZmWx6rRxdJpCiD2Jw4rKwxJ3fc7MGF"} />
      );
  }
};

export default Reel;
