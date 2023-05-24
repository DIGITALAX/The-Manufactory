import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import React, { ReactElement, useEffect } from "react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "The Manufactory",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
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
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
