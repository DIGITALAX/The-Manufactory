import { FunctionComponent } from "react";

const Title: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start">
      <div className="relative text-white font-gen uppercase flex w-full text-center text-[15rem] h-fit justify-center items-center leading-[10rem] tracking-widest">
        THE
        <br />
        MANUFACTORY
      </div>
      <div
        className="absolute text-black font-gen uppercase flex w-full text-center text-[15rem] h-fit justify-center items-center leading-[10rem] z-1 right-6 tracking-widest"
        id="title"
      >
        THE
        <br />
        MANUFACTORY
      </div>
      <div className="relative text-white font-break uppercase flex w-1/2 text-center text-2xl h-fit justify-center items-center">
        AN AI
        <br />
        DESIGN & FULFILLMENT <br /> STUDIO CO-OP
      </div>
    </div>
  );
};

export default Title;
