"use client";

import Main from "./Main";
import MicroFooter from "./MicroFooter";
import Sidebar from "./Sidebar";

export default function Entry({ dict }: { dict: any }) {
  return (
    <>
      <Main dict={dict} />
      <div
        className="relative w-full h-2 antes:w-[0.5rem] antes:h-screen"
        id="bg"
      ></div>
      <Sidebar dict={dict} />
      <div className="relative w-full h-fit flex antes:hidden pt-12">
        <MicroFooter dict={dict} />
      </div>
    </>
  );
}
