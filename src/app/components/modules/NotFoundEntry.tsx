"use client";

import { useRouter } from "next/navigation";

export default function NotFoundEntry({ dict }: { dict: any }) {
  const router = useRouter();
  return (
    <div className="relative min-h-screen min-w-screen h-screen w-screen flex items-center justify-center">
      <div className="relative w-fit h-fit flex flex-row gap-2 items-center justify-center text-white font-gen p-6 text-center">
        {dict?.glitch} 
        <div
          onClick={() => router.push("/")}
          className="hover:opacity-80 cursor-pointer flex items-center justify-center relative"
        >
          {dict?.home}
        </div>
      </div>
    </div>
  );
}
