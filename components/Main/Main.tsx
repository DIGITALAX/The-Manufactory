import { FunctionComponent } from "react";
import Title from "./modules/Title";
import useReel from "./hooks/useReel";
import Reel from "./modules/Reel";
import Arrows from "./modules/Arrows";
import MicroFooter from "./modules/MicroFooter";
import About from "./modules/About";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";

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
        <div className="absolute w-32 h-32 z-10">
          <Image
            src={`${INFURA_GATEWAY}/QmNYE15bvHhA9gQZXZnu8zf8fdcaAiXb6X64HhTZNAH98s`}
            layout="fill"
            objectFit="cover"
            draggable={false}
            priority
          />
        </div>
      </div>
      <MicroFooter />
    </div>
  );
};

export default Main;
