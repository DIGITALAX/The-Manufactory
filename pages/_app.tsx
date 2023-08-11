import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./../redux/store";

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
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

export default function App({ Component, pageProps }: AppProps) {
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
    <Provider store={store}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}
