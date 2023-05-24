import { INFURA_GATEWAY } from "@/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { CardsProps } from "../types/sidebar.types";

const Cards: FunctionComponent<CardsProps> = ({
  cards,
  currentIndex,
}): JSX.Element => {
  return (
    <div className="relative w-fit min-w-fit h-fit overflow-y-scroll gap-3 flex flex-col">
      {[...cards?.slice(currentIndex), ...cards?.slice(0, currentIndex)]
        ?.reverse()
        ?.reverse()
        ?.map((card: string[], index: number) => {
          return (
            <div
              key={index}
              className="relative flex flex-col gap-1.5 text-white font-clashM text-base w-full h-fit"
            >
              <div className="relative w-fit h-fit justify-end">{card[1]}</div>
              <div className="relative w-80 h-[32rem] flex justify-center items-center">
                <Image
                  src={`${INFURA_GATEWAY}/${card[0]}`}
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
