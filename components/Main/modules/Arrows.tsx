import { FunctionComponent } from "react";
import { ArrowsProps } from "../types/main.types";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";

const Arrows: FunctionComponent<ArrowsProps> = ({
  reelNumber,
  reelNumbers,
  setReelNumber,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-row gap-14 justify-center items-center text-center">
      <div
        className="relative w-5 h-8 rotate-180 cursor-pointer active:scale-95 inline-block justify-center items-center"
        onClick={() =>
          setReelNumber(reelNumber > 0 ? reelNumber - 1 : reelNumbers.length)
        }
      >
        <Image
          src={`${INFURA_GATEWAY}/QmSxXPREjpTfwygwvhWB5WJusGarig5XzDVp7hRQbjeSwT`}
          layout="fill"
          draggable={false}
        />
      </div>
      <div className="relative w-fit h-fit text-white font-break text-3xl items-center justify-center flex left-1">{`///`}</div>
      <div
        className="relative w-5 h-8 cursor-pointer active:scale-95 inline-block justify-center items-center"
        onClick={() =>
          setReelNumber(reelNumber < reelNumbers.length ? reelNumber + 1 : 0)
        }
      >
        <Image
          src={`${INFURA_GATEWAY}/QmSxXPREjpTfwygwvhWB5WJusGarig5XzDVp7hRQbjeSwT`}
          layout="fill"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Arrows;
