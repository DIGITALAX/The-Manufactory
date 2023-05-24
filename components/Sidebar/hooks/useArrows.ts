import { useState } from "react";

const useArrows = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: string[][] = [
    ["QmYY4QBV6zfGiD1G8h8CJBxd61L4YrhVwJbCBA5Mx9ThQm", "title one"],
    ["QmcEzu4vL3TqG5o7ie6rZo2yMPAQf3ZNYXRgaG7onHK8SA", "title two"],
    ["QmT5Rfj7yPx6g5PMutMU9E7Z9ovAu6VCaBpYDadYyeNW5j", "title three"],
    ["QmcwrCwFFK1i1RYpGG4uTnBz5z9yTh3JmKwnCut33b1tbA", "title four"],
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
