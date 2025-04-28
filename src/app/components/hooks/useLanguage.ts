import { MANUFACTORY_WAITLIST_CONTRACT } from "@/app/lib/constants";
import { chains } from "@lens-chain/sdk/viem";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const useLanguage = () => {
  const router = useRouter();
  const path = usePathname();
  const [chosenLanguage, setChosenLanguage] = useState<string>(
    path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] as string
  );

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };


  return {
    changeLanguage,
    chosenLanguage,
    setChosenLanguage,  };
};

export default useLanguage;
