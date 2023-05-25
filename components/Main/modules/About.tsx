import { FunctionComponent } from "react";
import { AboutProps } from "../types/main.types";
import Text from "./Text";

const About: FunctionComponent<AboutProps> = ({
  reelNumber,
  handleConnect,
  handleMint,
  connected,
  mintLoading,
  claimed,
  dispatch,
}): JSX.Element => {
  switch (reelNumber) {
    case 4:
      return (
        <Text
          message={
            "WE’RE THE ONES SPINNING THE COLOR WHEEL. CRAFTING WEARABLE STATEMENTS, WITH EACH STITCH, EACH LINE, EACH SHADE, BUILD AUTONOMY FROM CREATION TO FULFILLMENT. "
          }
        />
      );

    case 3:
      return (
        <Text
          message={
            "NO ROBOT ARMS WRESTLING ARTISTS OVER WHO GETS TO DESIGN THE LATEST BATCH OF TEXTILES. WE’RE TOO BUSY USING ALL THE EQUIPMENT YOU’D EXPECT IN A PLACE LIKE THIS."
          }
        />
      );

    case 2:
      return <Text message={"WHERE IT IS"} />;

    case 1:
      return (
        <Text
          message={
            "LISTLESS AT THE THOUGHT OF WATCHING  THE WORLD PASS BY, A NEW BATCH OF CREATORS COMINGLE WITH THE LATEST MACHINES, MARKET MAKERS & MODELS"
          }
        />
      );

    default:
      return (
        <Text
          message={
            "FULFILLMENT IS CLOSER THAN YOU THINK. HAVE A FREE MINT BEFORE YOU GET INTO CO-OP CONSIDERATION & JOIN IN."
          }
          mint
          handleConnect={handleConnect}
          handleMint={handleMint}
          connected={connected}
          mintLoading={mintLoading}
          claimed={claimed}
          dispatch={dispatch}
        />
      );
  }
};

export default About;
