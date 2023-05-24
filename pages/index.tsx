import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main/Main";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-center">
      <Main />
      <div className="relative w-10 min-h-full h-full flex" id="bg"></div>
      <Sidebar />
    </div>
  );
}
