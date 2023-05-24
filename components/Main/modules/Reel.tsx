import { FunctionComponent } from "react";
import { ReelProps } from "../types/main.types";
import Mint from "./Mint";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";

const Reel: FunctionComponent<ReelProps> = ({ reelNumber }): JSX.Element => {
  switch (reelNumber) {
    case 1:
      return <Mint />;

    default:
      return (
        <div className="relative w-100 h-full flex flex-col justify-center">
          <div className="absolute h-[45rem] border border-white left-3 top-3 w-full flex items-center justify-center"></div>
          <div className="relative h-[45rem] w-full flex items-center justify-center bg-azul">
            <Image
              src={`${INFURA_GATEWAY}/QmNYE15bvHhA9gQZXZnu8zf8fdcaAiXb6X64HhTZNAH98s`}
              layout="fill"
              objectFit="cover"
              draggable={false}
              priority
            />
          </div>
          <div
            className="absolute w-44 h-60 z-10 bottom-30 justify-center flex items-center left-10"
            id="bounce2"
          >
            <Image
              src={`${INFURA_GATEWAY}/QmcRHFJiy7i9x4VJUAok2m93bWNx2TTV1R6CzKYgT6PVDy`}
              layout="fill"
              objectFit="cover"
              draggable={false}
              priority
            />
          </div>
        </div>
      );
  }
};

export default Reel;
