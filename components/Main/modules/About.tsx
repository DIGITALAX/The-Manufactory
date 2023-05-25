import { FunctionComponent } from "react";
import { AboutProps } from "../types/main.types";
import { AiOutlineLoading } from "react-icons/ai";
import { setModal } from "@/redux/reducers/modalSlice";

const About: FunctionComponent<AboutProps> = ({
  reelNumber,
  handleConnect,
  handleMint,
  connected,
  mintLoading,
  claimed,
  dispatch,
}): JSX.Element => {
  switch (reelNumber) {
    case 1:
      return (
        <div className="relative w-3/4 h-72 text-white font-clashM text-4xl uppercase break-words min-h-[10rem]">
          FULFILLMENT IS CLOSER THAN YOU THINK. HAVE A FREE MINT BEFORE YOU GET
          INTO CO-OP CONSIDERATION & JOIN IN.
        </div>
      );

    default:
      return (
        <div className="w-3/4 h-72 flex flex-col min-h-[10rem]">
          <div className="relative w-full h-fit text-white font-clashM text-4xl uppercase break-words">
            FULFILLMENT IS CLOSER THAN YOU THINK. HAVE A FREE MINT BEFORE YOU
            GET INTO CO-OP CONSIDERATION & JOIN IN.
          </div>
          <div
            className={`absolute w-32 h-12 flex justify-center items-center bottom-3 right-10 ml-auto z-2 ${
              !mintLoading && !claimed && "cursor-pointer active:scale-95"
            }`}
            id="glow"
            onClick={
              mintLoading
                ? () => {}
                : claimed
                ? () =>
                    dispatch(
                      setModal({
                        actionOpen: true,
                        actionMessage:
                          "Glad you're excited, but there's a 1 free mint per wallet limit. Pay to mint on the way.",
                      })
                    )
                : !connected
                ? () => handleConnect()
                : () => handleMint()
            }
          >
            <div
              className={`font-gen text-black flex items-center justify-center w-fit h-fit text-4xl ${
                mintLoading && "animate-spin"
              }`}
            >
              {mintLoading ? (
                <AiOutlineLoading color="black" size={15} />
              ) : (
                "FREE MINT"
              )}
            </div>
          </div>
        </div>
      );
  }
};

export default About;
