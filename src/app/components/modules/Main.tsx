import { FunctionComponent, JSX } from "react";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import MicroFooter from "./MicroFooter";
import MicroHeader from "./MicroHeader";
import Title from "./Title";
import Reel from "./Reel";
import Arrows from "./Arrows";
import About from "./About";
import useAbout from "../hooks/useAbout";
import { DndContext } from "@dnd-kit/core";

const Main: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const { reelNumber, setReelNumber, sensors, position, setPosition } =
    useAbout();
  return (
    <div
      className="flex flex-col h-full antes:h-screen w-full overflow-y-scroll"
      id="main"
    >
      <MicroHeader dict={dict} />
      <div className="flex flex-col items-center justify-start p-4 sm:p-10 gap-6 flex-grow">
        <Title dict={dict} />
        <div className="flex flex-col gap-12 items-center justify-start flex-grow">
          <Reel reelNumber={reelNumber} />
          <Arrows setReelNumber={setReelNumber} reelNumber={reelNumber} />
          <div className="relative flex w-auto h-auto justify-center items-start">
            <About dict={dict} reelNumber={reelNumber} />
            <DndContext
              onDragEnd={(event) => {
                if (event.delta) {
                  setPosition((prev) => ({
                    x: prev.x + event.delta.x,
                    y: prev.y + event.delta.y,
                  }));
                }
              }}
              sensors={sensors}
            >
              <div className="absolute antes:bottom-5 xl:bottom-28 right-20 sm:right-44 antes:right-32 z-10 h-24 w-24 sm:w-36 sm:h-36 antes:w-48 antes:h-48 cursor-grab active:cursor-grabbing">
                <Image
                  src={`${INFURA_GATEWAY}/QmPrSncWAC4nHqhj96QtPxUE9xUMyNxxKtFJAbCj5eVjXy`}
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                  priority
                />
              </div>
            </DndContext>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit hidden antes:flex mt-auto bottom-0">
        <MicroFooter dict={dict} />
      </div>
    </div>
  );
};

export default Main;
