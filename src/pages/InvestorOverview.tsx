import { FunctionComponent } from "react";
import InvestorSideBar from "../components/InvestorSidebar";
import ActivityOverview from "../components/ActivityOverview";

const InvestorOverview: FunctionComponent = () => {
  return (
    <div className="w-full h-[1024px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[484px] leading-[normal] tracking-[normal] lg:h-auto lg:gap-[242px] mq450:gap-[121px] mq700:gap-[60px]">
      <footer className="w-[1379px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[45px] shrink-0 max-w-full text-left text-5xl font-outfit mq450:gap-[22px]">
        <div className="w-[328px] shadow-[2px_4px_30px_#e9eefd] rounded-tl-none rounded-tr-lg rounded-b-none bg-white-base overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 pb-[432px] pr-3 pl-0 box-border gap-[49.7px] max-w-full mq700:gap-[25px] mq700:pt-5 mq700:pb-[183px] mq700:box-border mq925:pt-[21px] mq925:pb-[281px] mq925:box-border">
          <div className="w-[296.1px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="self-stretch w-[37.1px] relative max-h-full min-h-[31px] shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[83px] shrink-0 z-[1] mq700:text-lgi">
                Packets
              </a>
            </div>
          </div>
          <InvestorSideBar />
        </div>
        <ActivityOverview />
      </footer>
      <div className="w-[333px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <img
          className="h-[35px] w-[35px] relative shrink-0"
          alt=""
          src="/group-1000002260.svg"
        />
      </div>
    </div>
  );
};

export default InvestorOverview;
