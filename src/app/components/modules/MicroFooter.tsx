import { INFURA_GATEWAY } from "@/app/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";

const MicroFooter: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col md:flex-row items-center justify-start bottom-0 px-4 pb-3 md:gap-0 gap-3">
      <div className="relative md:absolute break-words left-2 flex items-center justify-center text-center md:text-left text-xs font-clash text-white bottom-2">
        {dict?.trad}
      </div>
      <div className="w-full h-full flex flex-row gap-3 justify-center items-center">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.digitalax.xyz"
          className="relative w-4 h-4 flex cursor-pointer active:scale-95 justify-center items-center"
        >
          <Image
            src={`${INFURA_GATEWAY}/QmSVUP4KFDrQ4pigtY67UbNABeaSFNikAw23ucbGRhh8nU`}
            layout="fill"
            priority
            draggable={false}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.chromadin.xyz/autograph/digitalax"
          className="relative w-5 h-5 flex cursor-pointer active:scale-95 justify-center items-center"
        >
          <Image
            src={`${INFURA_GATEWAY}/Qmdpju26ySZyrHANGw6Evhnm3phEub9CDZC8gXMhwsj74Z`}
            layout="fill"
            priority
            draggable={false}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/digitalax"
          className="relative w-fit h-fit cursor-pointer active:scale-95 flex justify-center items-center"
        >
          <BsGithub size={20} color={"white"} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/DIGITALAX_"
          className="relative w-fit h-fit cursor-pointer active:scale-95 flex justify-center items-center"
        >
          <BsTwitter size={20} color={"white"} />
        </a>
      </div>
    </div>
  );
};

export default MicroFooter;
