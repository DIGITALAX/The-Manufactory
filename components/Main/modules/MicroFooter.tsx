import { FunctionComponent } from "react";

const MicroFooter: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-start justify-start bottom-0">
      <div className="font-herm text-white text-[7rem] flex">{`< < <`}</div>
    </div>
  );
};

export default MicroFooter;
