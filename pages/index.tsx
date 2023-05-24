import Main from "@/components/Main/Main";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div
      className="relative w-full h-[100rem] flex flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-center"
      id="app"
    >
      <Main />
      <div className="relative w-2 h-full" id="bg"></div>
      <Sidebar />
    </div>
  );
}
