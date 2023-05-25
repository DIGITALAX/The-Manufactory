import { INFURA_GATEWAY } from "@/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const MicroFooter: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-60 flex flex-col items-start justify-start bottom-0 px-4">
      <div className="w-full h-full flex flex-row gap-2">
        <div className="relative w-14 h-20 flex rotate-180">
          <Image
            src={`${INFURA_GATEWAY}/QmSxXPREjpTfwygwvhWB5WJusGarig5XzDVp7hRQbjeSwT`}
            layout="fill"
            width={5}
            height={8}
            draggable={false}
          />
        </div>
        <div className="relative w-14 h-20 flex rotate-180">
          <Image
            src={`${INFURA_GATEWAY}/QmSxXPREjpTfwygwvhWB5WJusGarig5XzDVp7hRQbjeSwT`}
            layout="fill"
            width={5}
            height={8}
            draggable={false}
          />
        </div>
        <div className="relative w-14 h-20 flex rotate-180">
          <Image
            src={`${INFURA_GATEWAY}/QmSxXPREjpTfwygwvhWB5WJusGarig5XzDVp7hRQbjeSwT`}
            layout="fill"
            width={5}
            height={8}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MicroFooter;
