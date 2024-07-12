import { FunctionComponent } from "react";
import FrameComponent1 from "../components/ExploreNavBar";
import ListingsContainer from "../components/ListingsContainer";

const FullExplore: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-8 pb-[106px] pr-[21px] pl-5 box-border gap-[32px] leading-[normal] tracking-[normal] mq750:gap-[16px]">
      <FrameComponent1 />
      <main className="flex flex-row items-start justify-end py-0 pr-[43px] pl-11 box-border max-w-full lg:pl-[22px] lg:pr-[21px] lg:box-border">
        <ListingsContainer />
      </main>
    </div>
  );
};

export default FullExplore;
