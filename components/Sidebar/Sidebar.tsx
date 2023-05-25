import { FunctionComponent, useEffect } from "react";
import Cards from "./modules/Cards";
import useArrows from "./hooks/useArrows";
import Arrows from "./modules/Arrows";

const Sidebar: FunctionComponent = (): JSX.Element => {
  const { cards, currentIndex, moveForward, moveBackward } = useArrows();
  return (
    <div className="relative w-full antes:w-fit min-w-fit h-full flex flex-col items-center justify-start gap-6 p-6 antes:overflow-x-hidden">
      <Arrows moveForward={moveForward} moveBackward={moveBackward} />
      <Cards cards={cards} currentIndex={currentIndex} />
    </div>
  );
};

export default Sidebar;
