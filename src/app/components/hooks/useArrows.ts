import { useState } from "react";

const useArrows = (dict: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: {
    image: string;
    title: string;
  }[] = [
    {
      image: "QmT5Rfj7yPx6g5PMutMU9E7Z9ovAu6VCaBpYDadYyeNW5j",
      title: dict?.gen,
    },
    {
      image: "QmcwrCwFFK1i1RYpGG4uTnBz5z9yTh3JmKwnCut33b1tbA",
      title: dict?.story,
    },
    {
      image: "QmcEzu4vL3TqG5o7ie6rZo2yMPAQf3ZNYXRgaG7onHK8SA",
      title: dict?.rare,
    },
    {
      image: "QmYY4QBV6zfGiD1G8h8CJBxd61L4YrhVwJbCBA5Mx9ThQm",
      title: dict?.local,
    },
    {
      image: "QmewYPGvnsH4V97BRExToTfmADrbczVfR9JQp4KG1b8zuM",
      title: dict?.ciudad,
    },
    {
      image: "QmPqVL57FcJat5aj1mFChXyk5a8i7Aqq3TnZtAbspK3ze4",
      title: dict?.remote,
    },
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
