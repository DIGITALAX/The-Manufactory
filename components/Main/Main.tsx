import { FunctionComponent } from "react";
import Title from "./modules/Title";
import useReel from "./hooks/useReel";
import Reel from "./modules/Reel";
import Arrows from "./modules/Arrows";
import MicroFooter from "./modules/MicroFooter";
import About from "./modules/About";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import Draggable from "react-draggable";

const Main: FunctionComponent = (): JSX.Element => {
  const {
    reelNumber,
    setReelNumber,
    reelNumbers,
    handleConnect,
    handleMint,
    connected,
    mintLoading,
    claimed,
  } = useReel();

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
        <About
          reelNumber={reelNumber}
          connected={connected}
          handleConnect={handleConnect}
          handleMint={handleMint}
          mintLoading={mintLoading}
          claimed={claimed}
        />
        <div className="absolute bottom-3 right-10 z-10">
          <Draggable enableUserSelectHack={false}>
            <div className="relative w-48 h-48 cursor-grab active:cursor-grabbing">
              <Image
                src={`${INFURA_GATEWAY}/QmPrSncWAC4nHqhj96QtPxUE9xUMyNxxKtFJAbCj5eVjXy`}
                layout="fill"
                objectFit="cover"
                draggable={false}
                priority
              />
            </div>
          </Draggable>
        </div>
      </div>
      <MicroFooter />
    </div>
  );
};

export default Main;
