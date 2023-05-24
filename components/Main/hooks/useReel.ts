import { useState } from "react";

const useReel = () => {
  const reelNumbers: number[] = [0, 1, 2, 3];
  const [reelNumber, setReelNumber] = useState<number>(0);

  return {
    reelNumber,
    setReelNumber,
    reelNumbers,
  };
};

export default useReel;
