import { FunctionComponent } from "react";

const Title: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start">
      <div className="relative text-white font-gen uppercase flex w-full text-center text-[12rem] h-fit justify-center items-center leading-tight">
        THE MANUFACTORY
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
