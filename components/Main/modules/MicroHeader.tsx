import { FunctionComponent, useState } from "react";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { MicroHeaderProps } from "../types/main.types";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";

const MicroHeader: FunctionComponent<MicroHeaderProps> = ({
  t,
  i18n,
  router,
}): JSX.Element => {
  const [chosenLanguage, setChosenLanguage] = useState<string>(i18n.language);

  return (
    <div className="relative w-full h-fit py-2 px-3 flex items-end justify-end">
      <div className="relative w-fit h-fit flex items-center justify-center flex flex-row gap-3">
        <div className="relative w-fit h-fit flex items-center justify-center text-white flex-col text-center font-gen uppercase">
          <div className="text-base flex items-center justify-center">
            {t("select")}
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
            <div
              className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-sewingHS"
              onClick={() =>
                setChosenLanguage((prev) =>
                  prev == "es" ? "ar" : prev == "en" ? "es" : "en"
                )
              }
            >
              <PiArrowFatLinesLeftFill size={20} />
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center">
              {chosenLanguage}
            </div>
            <div
              className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
              onClick={() =>
                setChosenLanguage((prev) =>
                  prev == "es" ? "en" : prev == "en" ? "ar" : "es"
                )
              }
            >
              <PiArrowFatLinesRightFill size={20} />
            </div>
          </div>
          <div
            onClick={() => {
              if (chosenLanguage !== "ar") {
                i18n.changeLanguage(chosenLanguage);
                router.push(router.asPath, undefined, {
                  // shallow: true,
                  locale: chosenLanguage,
                });
              }
            }}
            className={`text-sm flex items-center justify-center px-2 border border-white rounded-sm h-6 w-full ${
              chosenLanguage !== "ar" && "cursor-pointer active:scale-95"
            }`}
          >
            ~* {chosenLanguage == "ar" ? t("soon") : t("ve")} *~
          </div>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <div className="relative w-8 h-10 flex items-center justify-center">
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY}/${
                chosenLanguage == "es"
                  ? "QmY43U5RovVkoGrkLiFyA2VPMnGxf5e3NgYZ95u9aNJdem"
                  : chosenLanguage == "en"
                  ? "QmXdyvCYjZ7FkPjgFX5BPi98WTpPdJT5FHhzhtbyzkJuNs"
                  : "Qmb2rQi84hLXtiY673VaBHMTB32Lo1Xe1ah4Q7mG2fKf4J"
              }`}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroHeader;
