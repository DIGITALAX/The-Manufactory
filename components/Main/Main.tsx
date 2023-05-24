import { FunctionComponent } from "react";
import Title from "./modules/Title";
import useReel from "./hooks/useReel";
import Reel from "./modules/Reel";
import Arrows from "./modules/Arrows";
import MicroFooter from "./modules/MicroFooter";
import About from "./modules/About";

const Main: FunctionComponent = (): JSX.Element => {
  const { reelNumber, setReelNumber, reelNumbers } = useReel();
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start p-10 gap-6">
      <Title />
      <div className="relative w-full h-fit flex flex-col gap-12 items-center justify-start">
        <Reel reelNumber={reelNumber} />
        <Arrows
          setReelNumber={setReelNumber}
          reelNumber={reelNumber}
          reelNumbers={reelNumbers}
        />
        <About reelNumber={reelNumber} />
      </div>
      <MicroFooter />
    </div>
  );
};

export default Main;
