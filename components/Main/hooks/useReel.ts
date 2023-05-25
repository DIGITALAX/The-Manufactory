import { MANUFACTORY_WAITLIST_CONTRACT } from "@/lib/constants";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { waitForTransaction } from "@wagmi/core";
import { readContract } from "@wagmi/core";
import { setModal } from "@/redux/reducers/modalSlice";
import { useDispatch } from "react-redux";

const useReel = () => {
  const reelNumbers: number[] = [0, 1, 2, 3];
  const [reelNumber, setReelNumber] = useState<number>(0);
  const [connected, setConnected] = useState<boolean>(false);
  const [mintLoading, setMintLoading] = useState<boolean>(false);
  const [claimed, setClaimed] = useState<boolean>(false);
  const { openConnectModal } = useConnectModal();
  const { address } = useAccount();
  const dispatch = useDispatch();

  const { config } = usePrepareContractWrite({
    address: MANUFACTORY_WAITLIST_CONTRACT,
    abi: [
      {
        inputs: [],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "mint",
    enabled: Boolean(address),
  });

  const { writeAsync } = useContractWrite(config);

  const handleMint = async (): Promise<void> => {
    setMintLoading(true);
    try {
      const tx = await writeAsync?.();
      const res = await waitForTransaction({
        hash: tx?.hash!,
      });
      if (res.status === "success") {
        setClaimed(true);
        dispatch(
          setModal({
            actionOpen: true,
            actionMessage: "That's a snazzy mint, would look great as a print.",
          })
        );
      }
      setMintLoading(false);
    } catch (err: any) {
      dispatch(
        setModal({
          actionOpen: true,
          actionMessage: "Uh oh. Is the copy machine on the fritz? Try again.",
        })
      );
      console.error(err.message);
    }
    setMintLoading(false);
  };

  const handleConnect = () => {
    openConnectModal && openConnectModal();
  };

  const checkClaimed = async () => {
    if (!address) return;
    try {
      const data = await readContract({
        address: MANUFACTORY_WAITLIST_CONTRACT,
        abi: [
          {
            inputs: [
              { internalType: "address", name: "_address", type: "address" },
            ],
            name: "checkAddressMinted",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        args: [address],
        functionName: "checkAddressMinted",
      });

      if (data && data !== undefined) {
        setClaimed(true);
      } else {
        setClaimed(false);
      }
    } catch (err: any) {
      dispatch(
        setModal({
          actionOpen: true,
          actionMessage: "Uh oh. Is the copy machine on the fritz? Try again.",
        })
      );
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (address) {
      setConnected(true);
      checkClaimed();
    } else {
      setConnected(false);
    }
  }, [address]);

  return {
    reelNumber,
    setReelNumber,
    reelNumbers,
    handleConnect,
    handleMint,
    connected,
    mintLoading,
    claimed,
  };
};

export default useReel;
