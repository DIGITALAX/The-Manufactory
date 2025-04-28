"use client";
import { createContext, SetStateAction, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { chains } from "@lens-chain/sdk/viem";

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

export const config = createConfig(
  getDefaultConfig({
    appName: "The Manufactory",
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    appUrl: "https://themanufactory.xyz",
    appIcon: "https://themanufactory.xyz/favicon.ico",
    chains: [chains.mainnet],
    transports: {
      [chains.mainnet.id]: http("https://rpc.lens.xyz"),
    },
    ssr: true,
  })
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mint, setMint] = useState<string | undefined>();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Nerd Semi", cursive',
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
