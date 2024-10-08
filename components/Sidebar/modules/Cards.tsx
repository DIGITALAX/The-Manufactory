import { INFURA_GATEWAY } from "@/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { CardsProps } from "../types/sidebar.types";
import About from "./About";

const Cards: FunctionComponent<CardsProps> = ({
  cards,
  currentIndex,
  t,
  router,
}): JSX.Element => {
  return (
    <div className="relative w-4/5 antes:w-80 xl:w-fit min-w-fit h-fit gap-10 flex flex-col items-center justify-start">
      {[...cards?.slice(currentIndex), ...cards?.slice(0, currentIndex)]?.map(
        (
          card: {
            image: string;
            title: {
              es: string;
              en: string;
            };
          },
          index: number
        ) => {
          return (
            <div
              key={index}
              className="relative flex flex-col gap-1.5 text-white font-clashM w-3/4 antes:w-fit h-fit justify-center items-center text-center"
            >
              <div
                className={`relative w-full antes:w-60 xl:w-80  h-fit justify-start text-sm preG:text-base antes:text-xs antes:pr-2 ${
                  index % 2 !== 0 ? "text-left" : "text-right"
                }`}
              >
                {card.title?.[router.locale as "en" | "es"]}
              </div>
              <div className="relative w-full antes:w-60 xl:w-80 h-[20rem] preG:h-[33rem] antes:h-[20rem] xl:h-[32rem] flex justify-center items-center bg-azul">
                <Image
                  src={`${INFURA_GATEWAY}/${card.image}`}
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        }
      )}
      <About t={t} />
    </div>
  );
};

export default Cards;
