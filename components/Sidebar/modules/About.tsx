import { TFunction } from "i18next";
import { FunctionComponent } from "react";

const About: FunctionComponent<{ t: TFunction<"common", undefined> }> = ({
  t,
}): JSX.Element => {
  return (
    <div className="relative w-4/5 antes:w-72 h-fit flex flex-col items-start justify-start text-left text-white gap-8 break-words py-7">
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          {t("about")}
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          {t("des")}
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          {t("where")}
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          {t("heart")}
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          {t("prin")}
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          {t("rad")}
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          {t("wait")}
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          {t("free")}
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-end justify-start text-right">
        <div className="relative text-white font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start  leading-[4rem] tracking-widest">
          {t("titulo")}
        </div>
        <div
          className="absolute text-black font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start leading-[4rem] z-1 left-1 tracking-widest"
          id="title"
        >
          {t("titulo")}
        </div>
        <div className="relative text-ama font-break flex w-full text-right text-xl h-fit items-end">
          {t("creators")}
        </div>
      </div>
    </div>
  );
};

export default About;
