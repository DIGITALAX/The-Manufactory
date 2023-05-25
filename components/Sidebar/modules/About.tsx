import { FunctionComponent } from "react";

const About: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-4/5 antes:w-72 h-fit flex flex-col items-start justify-start text-left text-white gap-8 break-words py-7">
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          ABOUT THE MANUFACTORY
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          With the right equipment and knowhow, anyone can bring their
          imagination into reality. But not everyone knows where to go from
          there.
          <br />
          <br />
          The Manufactory is a no-nonsense operational hub that puts the power
          of autonomous markets back into the hands of independent creators.
          Why? Because we&apos;re tired of inaccessible tools and arbitrary
          gatekeeping by centralized platforms.
          <br />
          <br />
          We&apos;ve also had enough of the glamourized hype around AI and web3 tech.
          Here, these aren&apos;t the buzzwords of an influencer side-hustle. Yes,
          they&apos;re revolutionary, but it&apos;s because they&apos;re reliable tools of
          trade.
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          WHERE WE MEET
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          In{" "}
          <a
            target="_blank"
            rel={"noreferrer"}
            href="https://www.google.com/maps/place/115+W+30th+St,+New+York,+NY+10001/@40.7477249,-73.99296,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259af167d2b0f:0x3fb4c97fe0f35be9!8m2!3d40.7477249!4d-73.9903851!16s%2Fg%2F11cs884n6n?entry=ttu"
            className="underline"
          >
            the heart of the city
          </a>
          , The Manufactory is also accessible and operational virtually. It&apos;s
          an affirmation that you don&apos;t need to be physically present to make a
          statement, create fulfilling work remotely, or to become a member of
          something bigger. The Manufactory extends its invitation to create, to
          contribute, to trade, regardless of where you are.
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          PRINCIPLES
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          There is a more radical statement to be made about the freedom to
          imagine, and to make personal autonomy more real through creative
          trade, that emerges from the work. About how it&apos;s printable, wearable,
          to be shown on streets, in games, at trading desks, and on content
          streams everywhere. But we&apos;ll let you get to know us first, before we
          crack open the good stuff.
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-start justify-start">
        <div className="relative w-fit h-fit justify-start font-clashB text-lg">
          JOIN THE WAITLIST
        </div>
        <div className="relative w-fit h-fit justify-start font-clashM text-base">
          Make sure to generate a free mint while you wait.
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-end justify-start text-right">
        <div className="relative text-white font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start  leading-[4rem] tracking-widest">
          THE MANUFACTORY
        </div>
        <div
          className="absolute text-black font-gen uppercase flex w-full text-right text-[3.8rem] h-fit justify-start items-start leading-[4rem] z-1 left-1 tracking-widest"
          id="title"
        >
          THE MANUFACTORY
        </div>
        <div className="relative text-ama font-break flex w-full text-right text-xl h-fit items-end">
          Where creators wield skills, swap insights, and put to use the tools
          that make sense.
        </div>
      </div>
    </div>
  );
};

export default About;
