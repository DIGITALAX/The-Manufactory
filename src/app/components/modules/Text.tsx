import { FunctionComponent, JSX, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { TextProps } from "../types/components.types";
import { ModalContext } from "@/providers";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import useMint from "../hooks/useMint";

const Text: FunctionComponent<TextProps> = ({
  mint,
  message,
  coinop,
  dict,
}): JSX.Element => {
  const context = useContext(ModalContext);
  const { chainId, isConnected } = useAccount();
  const { openOnboarding, openSwitchNetworks } = useModal();
  const { mintLoading, handleMint, claimed } = useMint(dict);

  return (
    <div className="w-3/4 h-52 sm:h-72 flex flex-col min-h-[10rem] justify-start items-start">
      <div
        className={`relative w-fit h-fit text-white font-clashM text-sm preG:text-base sm:text-2xl casi:text-4xl justify-start items-start flex uppercase break-words ${
          message?.includes("WHERE IT IS") && "whitespace-nowrap"
        }`}
      >
        {message}
      </div>
      {mint ? (
        <div
          className={`absolute w-16 sm:w-32 h-8 sm:h-12 flex justify-center items-center -bottom-4 casi:bottom-3 right-10 ml-auto z-2 ${
            !mintLoading && !claimed && "cursor-pointer active:scale-95"
          }`}
          id="glow"
          onClick={() =>
            !mintLoading &&
            (claimed
              ? context?.setMint(dict?.one)
              : chainId !== 232
              ? openSwitchNetworks()
              : !isConnected
              ? openOnboarding()
              : handleMint())
          }
        >
          <div
            className={`font-gen text-black flex items-center justify-center w-fit h-fit text-lg sm:text-4xl ${
              mintLoading && "animate-spin"
            }`}
          >
            {mintLoading ? (
              <AiOutlineLoading color="black" size={15} />
            ) : (
              dict?.mint
            )}
          </div>
        </div>
      ) : (
        coinop && (
          <Link
            className={`absolute w-16 sm:w-32 h-8 sm:h-12 flex justify-center items-center -bottom-4 casi:-bottom-1 right-10 ml-auto z-2 ${
              mintLoading && !claimed && "cursor-pointer active:scale-95"
            }`}
            id="glow"
            href={`https://coinop.themanufactory.xyz`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`font-gen text-black flex items-center justify-center w-fit h-fit text-lg sm:text-4xl ${
                mintLoading && "animate-spin"
              }`}
            >
              {mintLoading ? (
                <AiOutlineLoading color="black" size={15} />
              ) : (
                dict?.go
              )}
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Text;
