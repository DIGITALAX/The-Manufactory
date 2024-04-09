import { TFunction, i18n } from "i18next";
import { NextRouter } from "next/router";
import { AnyAction, Dispatch } from "redux";

export type ReelProps = {
  reelNumber: number;
};

export type ArrowsProps = {
  setReelNumber: (e: number) => void;
  reelNumber: number;
  reelNumbers: number[];
};

export type AboutProps = {
  reelNumber: number;
  handleConnect: () => void;
  router: NextRouter;
  handleMint: () => Promise<void>;
  connected: boolean;
  mintLoading: boolean;
  claimed: boolean;
  dispatch: Dispatch<AnyAction>;
  t: TFunction<"common", undefined>;
};

export type MintProps = {
  image: string;
};

export type TextProps = {
  message: string;
  mint?: boolean;
  handleConnect?: () => void;
  handleMint?: () => Promise<void>;
  connected?: boolean;
  mintLoading?: boolean;
  claimed?: boolean;
  dispatch?: Dispatch<AnyAction>;
  coinop?: boolean;
  t: TFunction<"common", undefined>;
};

export type MicroHeaderProps = {
  t: TFunction<"common", undefined>;
  i18n: i18n;
  router: NextRouter;
};

export type MainProps = {
  t: TFunction<"common", undefined>;
  i18n: i18n;
  router: NextRouter;
};

export type TitleProps = {
  t: TFunction<"common", undefined>;
};
