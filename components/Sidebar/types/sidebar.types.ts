export type CardsProps = {
  cards: string[][];
  currentIndex: number;
};

export type ArrowsProps = {
  moveForward: () => void;
  moveBackward: () => void;
};
