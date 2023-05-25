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
  handleMint: () => Promise<void>;
  connected: boolean;
  mintLoading: boolean;
  claimed: boolean;
  dispatch: Dispatch<AnyAction>;
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
};
