import "@/styles/globals.css";
import "./../i18n";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./../redux/store";
import Head from "next/head";

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

function App({ Component, pageProps }: AppProps) {
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
          <Head>
            <meta
              name="keywords"
              content="Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom."
            />
            <meta name="robots" content="index, follow" />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: "The Manufactory",
                  description:
                    "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom.",
                  url: "https://www.themanufactory.xyz/",
                }),
              }}
            ></script>
          </Head>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default appWithTranslation(App);
