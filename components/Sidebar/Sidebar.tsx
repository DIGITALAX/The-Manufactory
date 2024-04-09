import { FunctionComponent } from "react";
import Cards from "./modules/Cards";
import useArrows from "./hooks/useArrows";
import Arrows from "./modules/Arrows";
import { TFunction } from "i18next";
import { NextRouter } from "next/router";

const Sidebar: FunctionComponent<{
  t: TFunction<"common", undefined>;
  router: NextRouter;
}> = ({ t, router }): JSX.Element => {
  const { cards, currentIndex, moveForward, moveBackward } = useArrows();
  return (
    <div
      className="relative antes:sticky top-0 right-0 w-full antes:w-fit min-w-fit h-[100rem] antes:h-full flex flex-col items-center justify-start gap-6 pt-6 px-6 antes:overflow-x-hidden"
      id="side"
    >
      <Arrows t={t} moveForward={moveForward} moveBackward={moveBackward} />
      <div className="h-full w-full overflow-y-scroll">
        <Cards
          router={router}
          t={t}
          cards={cards}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Sidebar;
