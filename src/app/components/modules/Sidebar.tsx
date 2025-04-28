import { INFURA_GATEWAY } from "@/app/lib/constants";
import Image from "next/image";
import { FunctionComponent, JSX } from "react";
import useArrows from "../hooks/useArrows";

const Sidebar: FunctionComponent<{
  dict: any;
}> = ({ dict }): JSX.Element => {
  const { cards, currentIndex, moveForward, moveBackward } = useArrows(dict);
  return (
    <div
      className="relative antes:sticky top-0 right-0 w-full antes:w-fit min-w-fit h-[100rem] antes:h-full flex flex-col items-center justify-start gap-6 pt-6 px-6 antes:overflow-x-hidden"
      id="side"
    >
      <div className="relative w-full h-fit flex flex-row font-clashB text-white justify-start items-center">
        <div className="relative justify-start w-full h-fit uppercase antes:text-base text-lg">
          {dict?.manu}
        </div>
        <div className="relative flex flex-row w-full h-fit items-center justify-end gap-3">
          <div
            className="relative w-5 h-3 justify-center items-center active:scale-95 cursor-pointer"
            onClick={() => moveBackward()}
          >
            <Image
              src={`${INFURA_GATEWAY}/QmZD9YcRuc2QHjuuV7NPJjR4EsavuPfY45j9tZaxoSDB3r`}
              layout="fill"
              draggable={false}
              alt="backward"
            />
          </div>
          <div
            className="relative w-5 h-3 justify-center items-center active:scale-95 cursor-pointer"
            onClick={() => moveForward()}
          >
            <Image
              src={`${INFURA_GATEWAY}/QmRePvoxG35EfKqFYcrQhfRcP9q4v85WErj5yCgbrCtMjx`}
              layout="fill"
              draggable={false}
              alt="forward"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full overflow-y-scroll">
        <div className="relative w-4/5 antes:w-80 xl:w-fit min-w-fit h-fit gap-10 flex flex-col items-center justify-start">
          {[
            ...cards?.slice(currentIndex),
            ...cards?.slice(0, currentIndex),
          ]?.map((card, index: number) => {
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
                  {card.title}
                </div>
                <div className="relative w-full antes:w-60 xl:w-80 h-[20rem] preG:h-[33rem] antes:h-[20rem] xl:h-[32rem] flex justify-center items-center bg-azul">
                  <Image
                    src={`${INFURA_GATEWAY}/${card.image}`}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    alt={`${card?.title} | DIGITALAX`}
                  />
                </div>
              </div>
            );
          })}
          <div className="relative w-4/5 antes:w-72 h-fit flex flex-col items-start justify-start text-left text-white gap-8 break-words py-7">
            <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
              <div className="relative w-fit h-fit justify-start font-clashB text-lg">
                {dict?.about}
              </div>
              <div className="relative w-fit h-fit justify-start font-clashM text-base">
                {dict?.des}
              </div>
            </div>
            <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
              <div className="relative w-fit h-fit justify-start font-clashB text-lg">
                {dict?.where}
              </div>
              <div className="relative w-fit h-fit justify-start font-clashM text-base">
                {dict?.heart}
              </div>
            </div>
            <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
              <div className="relative w-fit h-fit justify-start font-clashB text-lg">
                {dict?.prin}
              </div>
              <div className="relative w-fit h-fit justify-start font-clashM text-base">
                {dict?.rad}
              </div>
            </div>
            <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
              <div className="relative w-fit h-fit justify-start font-clashB text-lg">
                {dict?.wait}
              </div>
              <div className="relative w-fit h-fit justify-start font-clashM text-base">
                {dict?.free}
              </div>
            </div>
            <div className="relative w-fit h-fit flex flex-col gap-2 items-end justify-start text-right">
              <div className="relative text-white font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start  leading-[4rem] tracking-widest">
                {dict?.titulo}
              </div>
              <div
                className="absolute text-black font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start leading-[4rem] z-1 left-1 tracking-widest"
                id="title"
              >
                {dict?.titulo}
              </div>
              <div className="relative text-ama font-break flex w-full text-right text-xl h-fit items-end">
                {dict?.creators}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
