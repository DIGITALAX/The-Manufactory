import { INFURA_GATEWAY } from "@/lib/constants";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { ImCross } from "react-icons/im";
import { MintProps } from "./types/modals.types";
import { setModal } from "@/redux/reducers/modalSlice";

const Mint: FunctionComponent<MintProps> = ({
  message,
  dispatch,
}): JSX.Element => {
  return (
    <div className="inset-0 justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto">
      <div className="relative w-full lg:w-[30vw] h-fit col-start-1 place-self-center bg-offBlack rounded-lg">
        <div className="relative w-full row-start-2 h-fit rounded-xl grid grid-flow-col auto-cols-auto">
          <div className="relative w-full h-full col-start-1 rounded-xl place-self-center">
            <div className="relative w-full h-full grid grid-flow-row auto-rows-auto gap-4 pb-8">
              <div className="relative w-fit h-fit row-start-1 self-center justify-self-end pr-3 pt-3 cursor-pointer">
                <ImCross
                  color="white"
                  size={15}
                  onClick={() =>
                    dispatch(
                      setModal({
                        actionOpen: false,
                        actionMedia: "",
                      })
                    )
                  }
                />
              </div>
              <div className="relative w-full h-fit flex flex-col items-center justify-center px-4 gap-6">
                <div className="relative w-3/4 h-fit justify-center items-center text-white font-gen text-sm text-center">
                  {message}
                </div>
                <div
                  className="relative w-1/2 h-36 preG:h-52 lg:h-40 xl:h-52 justify-center items-center rounded-lg border border-white"
                  id="staticLoad"
                >
                  <Image
                    src={`${INFURA_GATEWAY}/ipfs/${
                      message.includes("mint")
                        ? "QmdTWYqXn26k9A6U92eoRCu5gqv5P6Bqds9V2DekaMShC1"
                        : "QmetsZDFod8LGsuwcCTsqxaCpvgGEwa7cd2fQ2AtPjVYem"
                    }`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
