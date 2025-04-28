import { FunctionComponent, JSX } from "react";
import MicroFooter from "./MicroFooter";
import MicroHeader from "./MicroHeader";
import Title from "./Title";
import Reel from "./Reel";
import Arrows from "./Arrows";
import About from "./About";
import useAbout from "../hooks/useAbout";
import dynamic from "next/dynamic";

const Draggable = dynamic(() => import("./Draggable"), {
  ssr: false,
});

const Main: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const { reelNumber, setReelNumber } = useAbout();

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
            <Draggable />
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
