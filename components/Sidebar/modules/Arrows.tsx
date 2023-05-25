import { FunctionComponent } from "react";
import { ArrowsProps } from "../types/sidebar.types";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";

const Arrows: FunctionComponent<ArrowsProps> = ({
  moveBackward,
  moveForward,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-row font-clashB text-white justify-start items-center">
      <div className="relative justify-start w-full h-fit uppercase antes:text-base text-lg">
        MANUFACTURING AUTONOMY
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
          />
        </div>
      </div>
    </div>
  );
};

export default Arrows;
