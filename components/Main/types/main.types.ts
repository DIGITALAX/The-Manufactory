export type ReelProps = {
  reelNumber: number;
};

export type ArrowsProps = {
  setReelNumber: (e: number) => void;
  reelNumber: number;
  reelNumbers: number[];
};
