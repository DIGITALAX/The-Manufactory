"use client";

import Main from "./Main";
import MicroFooter from "./MicroFooter";
import Sidebar from "./Sidebar";

export default function Entry({ dict }: { dict: any }) {
  return (
    <div
      className="relative w-full h-full antes:h-screen flex flex-col antes:flex-row overflow-x-hidden selection:bg-azul selection:text-offBlack items-start justify-start"
      id="app"
    >
      <Main dict={dict} />
      <div
        className="relative w-full h-2 antes:w-2 antes:h-screen"
        id="bg"
      ></div>
      <Sidebar dict={dict} />
      <div className="relative w-full h-fit flex antes:hidden pt-12">
        <MicroFooter dict={dict} />
      </div>
    </div>
  );
}
