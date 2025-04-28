import { useState } from "react";

const useAbout = () => {
  const [reelNumber, setReelNumber] = useState<number>(0);

  return {
    reelNumber,
    setReelNumber,
  };
};

export default useAbout;
