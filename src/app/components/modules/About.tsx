import { FunctionComponent, JSX } from "react";
import Text from "./Text";
import { AboutProps } from "../types/components.types";

const About: FunctionComponent<AboutProps> = ({
  reelNumber,
  dict,
}): JSX.Element => {
  switch (reelNumber) {
    case 4:
      return <Text dict={dict} message={dict?.headStart} coinop />;

    case 3:
      return <Text dict={dict} message={dict?.spinning} />;

    case 2:
      return <Text dict={dict} message={dict?.robot} />;

    // case 2:
    //   return <Text message={"WHERE IT IS"} />;

    case 1:
      return <Text dict={dict} message={dict?.batch} />;

    default:
      return (
        <Text
          dict={dict}
          message={dict?.freeMint}
          mint
        />
      );
  }
};

export default About;
