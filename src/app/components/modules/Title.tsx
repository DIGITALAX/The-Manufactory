import { FunctionComponent, JSX } from "react";

const Title: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start gap-4 sm:gap-0">
      <div className="relative text-white font-gen uppercase flex w-full text-center text-[3.8rem] xss:text-[5rem] sm:text-[10rem] casi:text-[15rem] h-fit justify-center items-center leading-[4rem] sm:leading-[7rem] casi:leading-[10rem] tracking-widest">
        {dict?.titulo}
      </div>
      <div
        className="absolute text-black font-gen uppercase flex w-full text-center text-[3.8rem] xss:text-[5rem] sm:text-[10rem] casi:text-[15rem] h-fit justify-center items-center leading-[4rem] sm:leading-[7rem] casi:leading-[10rem] z-1 right-px xss:right-1 sm:right-3 casi:right-6 tracking-widest"
        id="title"
      >
        {dict?.titulo}
      </div>
      <div className="relative text-white font-break uppercase flex w-1/2 text-center text-sm sm:text-xl casi:text-2xl h-fit justify-center items-center">
        {dict?.cump}
      </div>
    </div>
  );
};

export default Title;
