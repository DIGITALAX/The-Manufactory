import { FunctionComponent } from "react";
import { ArrowsProps } from "../types/main.types";

const Arrows: FunctionComponent<ArrowsProps> = ({
  reelNumber,
  reelNumbers,
  setReelNumber,
}): JSX.Element => {
  console.log({ reelNumber });
  return (
    <div className="relative w-full h-fit flex flex-row gap-14 justify-center items-center text-center">
      <div
        className="relative w-fit h-fit text-white font-herm text-7xl/none cursor-pointer active:scale-95 flex justify-center items-center"
        onClick={() =>
          setReelNumber(reelNumber > 0 ? reelNumber - 1 : reelNumbers.length)
        }
      >{`<`}</div>
      <div className="relative w-fit h-fit text-white font-break text-3xl items-center justify-center flex left-1">{`///`}</div>
      <div
        className="relative w-fit h-fit text-white font-herm text-7xl/none cursor-pointer active:scale-95 flex justify-center items-center"
        onClick={() =>
          setReelNumber(reelNumber < reelNumbers.length ? reelNumber + 1 : 0)
        }
      >{`>`}</div>
    </div>
  );
};

export default Arrows;
