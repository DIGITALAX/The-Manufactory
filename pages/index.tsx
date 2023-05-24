import Main from "@/components/Main/Main";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="relative w-full h-[100rem] flex flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-center"
      id="app"
    >
      <Head>
        <title>The Manufactory</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DIGITALAX" />
        <meta
          property="og:image"
          content="https://themanufactory.xyz/card.png/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Main />
      <div className="relative w-2 h-full" id="bg"></div>
      <Sidebar />
    </div>
  );
}
