import { TFunction } from "i18next";
import { NextRouter } from "next/router";

export type CardsProps = {
  cards: {
    image: string;
    title: {
      es: string;
      en: string;
    };
  }[] ;
  currentIndex: number;
  t: TFunction<"common", undefined>;
  router: NextRouter;
};

export type ArrowsProps = {
  moveForward: () => void;
  moveBackward: () => void;
  t: TFunction<"common", undefined>;
};
