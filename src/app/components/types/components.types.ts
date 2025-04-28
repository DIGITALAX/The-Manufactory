import { SetStateAction } from "react";

export type ArrowsProps = {
  setReelNumber: (e: SetStateAction<number>) => void;
  reelNumber: number;
};

export type TextProps = {
  message: string;
  mint?: boolean;
  coinop?: boolean;
  dict: any;
};

export type AboutProps = {
  reelNumber: number;
  dict: any;
};
