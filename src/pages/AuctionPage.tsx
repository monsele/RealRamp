import { FunctionComponent } from "react";
import ExploreNavBar from "../components/ExploreNavBar";
import AuctionsContainer from "../components/AuctionsContainer";

const AuctionPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-8 pb-[106px] pr-[21px] pl-5 box-border gap-[32px] leading-[normal] tracking-[normal] mq750:gap-[16px]">
      <ExploreNavBar />
      <main className="flex flex-row items-start justify-end py-0 pr-[43px] pl-11 box-border max-w-full lg:pl-[22px] lg:pr-[21px] lg:box-border">
        <AuctionsContainer />
      </main>
    </div>
  );
};

export default AuctionPage;
