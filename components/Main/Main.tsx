import { FunctionComponent } from "react";
import Title from "./modules/Title";
import useReel from "./hooks/useReel";
import Reel from "./modules/Reel";
import Arrows from "./modules/Arrows";

const Main: FunctionComponent = (): JSX.Element => {
  const { reelNumber, setReelNumber, reelNumbers } = useReel();
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start p-10 gap-6">
      <Title />
      <Reel reelNumber={reelNumber} />
      <Arrows
        setReelNumber={setReelNumber}
        reelNumber={reelNumber}
        reelNumbers={reelNumbers}
      />
    </div>
  );
};

export default Main;
