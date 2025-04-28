import { useContext, useEffect, useState } from "react";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { useAccount } from "wagmi";
import { MANUFACTORY_WAITLIST_CONTRACT } from "@/app/lib/constants";
import { chains } from "@lens-chain/sdk/viem";
import { ModalContext } from "@/providers";

const useMint = (dict: any) => {
  const [mintLoading, setMintLoading] = useState<boolean>(false);
  const [claimed, setClaimed] = useState<boolean>(false);
  const { address } = useAccount();
  const context = useContext(ModalContext);
  const publicClient = createPublicClient({
    chain: chains.mainnet,
    transport: http("https://rpc.lens.xyz"),
  });

  const handleMint = async (): Promise<void> => {
    setMintLoading(true);
    try {
      const clientWallet = createWalletClient({
        chain: chains.mainnet,
        transport: custom((window as any).ethereum),
      });

      const { request } = await publicClient.simulateContract({
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
        chain: chains.mainnet,

        account: address,
      });

      const res = await clientWallet.writeContract(request);
      await publicClient.waitForTransactionReceipt({ hash: res });

      setClaimed(true);
      context?.setMint(dict?.limit);
    } catch (err: any) {
      context?.setMint(dict?.again);

      context;
      console.error(err.message);
    }
    setMintLoading(false);
  };

  const handleClaimed = async () => {
    try {
      const data = await publicClient.readContract({
        address: MANUFACTORY_WAITLIST_CONTRACT,
        abi: [
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "balanceOf",
        args: [address!],
      });

      if (Number(data) >= 1) {
        setClaimed(true);
      } else {
        setClaimed(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (address) {
      handleClaimed();
    }
  }, [address]);

  return {
    handleMint,
    mintLoading,
    claimed,
  };
};

export default useMint;
