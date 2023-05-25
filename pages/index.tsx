import Main from "@/components/Main/Main";
import MicroFooter from "@/components/Main/modules/MicroFooter";
import Modals from "@/components/Modals/Modals";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";

export default function Home() {

  return (
    <div
      className="relative w-full h-full antes:h-screen flex flex-col antes:flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-start"
      id="app"
    >
      <Head>
        <title>The Manufactory</title>
        <meta
          name="description"
          content="The Manufactory is a no-nonsense operational hub that puts the power of autonomous markets back into the hands of independent creators."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="The Manufactory" />
        <meta
          property="og:image"
          content="https://themanufactory.xyz/card.png/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Main />
      <div className="relative w-full h-2 antes:w-2 antes:h-screen" id="bg"></div>
      <Sidebar />
      <div className="relative w-full h-fit flex antes:hidden pt-12">
        <MicroFooter />
      </div>
      <Modals />
    </div>
  );
}
