import { useState } from "react";

const useArrows = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: string[][] = [
    [
      "QmT5Rfj7yPx6g5PMutMU9E7Z9ovAu6VCaBpYDadYyeNW5j",
      "SYNTH GENERATED STREETWEAR & AOP APPAREL",
    ],
    [
      "QmcwrCwFFK1i1RYpGG4uTnBz5z9yTh3JmKwnCut33b1tbA",
      "INTERACTIVE STORYCRAFT",
    ],
    [
      "QmcEzu4vL3TqG5o7ie6rZo2yMPAQf3ZNYXRgaG7onHK8SA",
      "RARE COLLECTION AND STREET READY PRINTS",
    ],
    [
      "QmYY4QBV6zfGiD1G8h8CJBxd61L4YrhVwJbCBA5Mx9ThQm",
      "LOCAL & CLOUD PLATFORM GPU POOLS",
    ],
    [
      "QmewYPGvnsH4V97BRExToTfmADrbczVfR9JQp4KG1b8zuM",
      "24/7 STUDIO DESIGN & FULFILLMENT SPACE IN THE HEART OF A 24/7 CITY",
    ],
    [
      "QmPqVL57FcJat5aj1mFChXyk5a8i7Aqq3TnZtAbspK3ze4",
      "REMOTE ACCESS VIA AUTONOMOUS VIRTUAL WORKSHOP",
    ],
  ];

  const moveForward = (): void => {
    setCurrentIndex((currentIndex + 1) % cards?.length);
  };

  const moveBackward = (): void => {
    setCurrentIndex((currentIndex - 1 + cards?.length) % cards?.length);
  };

  return { cards, currentIndex, moveForward, moveBackward };
};

export default useArrows;
