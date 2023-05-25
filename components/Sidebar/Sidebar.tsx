import { FunctionComponent, useEffect } from "react";
import Cards from "./modules/Cards";
import useArrows from "./hooks/useArrows";
import Arrows from "./modules/Arrows";

const Sidebar: FunctionComponent = (): JSX.Element => {
  const { cards, currentIndex, moveForward, moveBackward } = useArrows();
  return (
    <div
      className="relative antes:sticky top-0 right-0 w-full antes:w-fit min-w-fit h-[100rem] antes:h-full flex flex-col items-center justify-start gap-6 pt-6 px-6 antes:overflow-x-hidden"
      id="side"
    >
      <Arrows moveForward={moveForward} moveBackward={moveBackward} />
      <div className="h-full w-full overflow-y-scroll">
        <Cards cards={cards} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default Sidebar;
