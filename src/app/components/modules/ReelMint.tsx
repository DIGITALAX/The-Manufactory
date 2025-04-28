import { INFURA_GATEWAY } from "@/app/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";

const ReelMint: FunctionComponent<{ image: string }> = ({
  image,
}): JSX.Element => {
  return (
    <div className="relative w-4/5 preG:w-3/4 sm:w-96 casi:w-100 h-full flex flex-col justify-center">
      <div className="absolute h-[20rem] preG:h-[30rem] sm:h-[35rem] casi:h-[45rem] border border-white left-3 top-5 w-full flex items-center justify-center"></div>
      <div
        className="relative h-[20rem] preG:h-[30rem] sm:h-[35rem] casi:h-[45rem] w-full flex items-center justify-center bg-azul"
        id={`${image?.includes("noise") ? "static" : ""}`}
      >
        {!image?.includes("noise") && (
          <Image
            src={`${INFURA_GATEWAY}/${image}`}
            layout="fill"
            objectFit="cover"
            draggable={false}
            priority
          />
        )}
      </div>

      <div
        className="absolute w-16 preG:w-24 sm:w-36 antes:w-44 h-24 preG:h-36 sm:h-48 antes:h-60 z-10 bottom-30 justify-center flex items-center left-10"
        id="bounce2"
      >
        <Image
          src={`${INFURA_GATEWAY}/QmcRHFJiy7i9x4VJUAok2m93bWNx2TTV1R6CzKYgT6PVDy`}
          layout="fill"
          objectFit="cover"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
};

export default ReelMint;
