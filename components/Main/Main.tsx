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
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col h-full antes:h-screen w-full overflow-y-scroll"
      id="main"
    >
      <div className="flex flex-col items-center justify-start p-4 sm:p-10 gap-6 flex-grow">
        <Title />
        <div className="flex flex-col gap-12 items-center justify-start flex-grow">
          <Reel reelNumber={reelNumber} />
          <Arrows
            setReelNumber={setReelNumber}
            reelNumber={reelNumber}
            reelNumbers={reelNumbers}
          />
          <div className="relative flex w-auto h-auto justify-center items-start">
            <About
              reelNumber={reelNumber}
              connected={connected}
              handleConnect={handleConnect}
              handleMint={handleMint}
              mintLoading={mintLoading}
              claimed={claimed}
              dispatch={dispatch}
            />
            <Draggable enableUserSelectHack={false}>
              <div className="absolute antes:bottom-5 xl:bottom-28 right-20 sm:right-44 antes:right-32 z-10 h-24 w-24 sm:w-36 sm:h-36 antes:w-48 antes:h-48 cursor-grab active:cursor-grabbing">
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
      </div>
      <div className="relative w-full h-fit hidden antes:flex mt-auto bottom-0">
        <MicroFooter />
      </div>
    </div>
  );
};

export default Main;
