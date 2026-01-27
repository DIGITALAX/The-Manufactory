"use client";
import { createContext, SetStateAction, useEffect, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { chains } from "@lens-chain/sdk/viem";
import { injected } from "wagmi/connectors";

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      mint: string | undefined;
      setMint: (e: SetStateAction<string | undefined>) => void;
    }
  | undefined
>(undefined);

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export const config = createConfig({
  chains: [chains.mainnet],
  transports: {
    [chains.mainnet.id]: http("https://rpc.lens.xyz"),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
  ssr: true,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mint, setMint] = useState<string | undefined>();

  useEffect(() => {
    console.log(`
  ───────────╔╗╔╗──────────────────╔═╗─────╔╗
  ─╔╗───────╔╝╚╣║──────────────────║╔╝────╔╝╚╗
  ─╚╬══╦╦═╗─╚╗╔╣╚═╦══╗╔╗╔╦══╦═╗╔╗╔╦╝╚╦══╦═╩╗╔╬══╦═╦╗─╔╗
  ─╔╣╔╗╠╣╔╗╗─║║║╔╗║║═╣║╚╝║╔╗║╔╗╣║║╠╗╔╣╔╗║╔═╣║║╔╗║╔╣║─║║
  ─║║╚╝║║║║║─║╚╣║║║║═╣║║║║╔╗║║║║╚╝║║║║╔╗║╚═╣╚╣╚╝║║║╚═╝║
  ─║╠══╩╩╝╚╝─╚═╩╝╚╩══╝╚╩╩╩╝╚╩╝╚╩══╝╚╝╚╝╚╩══╩═╩══╩╝╚═╗╔╝
  ╔╝║─────────────────────────────────────────────╔═╝║
  ╚═╝─────────────────────────────────────────────╚══╝`);
  }, []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Break Regular", cursive',
          }}
        >
          <ModalContext.Provider
            value={{
              mint,
              setMint,
            }}
          >
            {children}
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
