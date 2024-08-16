import { FunctionComponent, useCallback } from "react";

export type AuctionNavbarType = {
  className?: string;
};

const AuctionNavbar: FunctionComponent<AuctionNavbarType> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "CONNECTED WALLET" to the project
  }, []);

  return (
    <header
      className={`self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-42xl bg-white-base flex flex-row items-start justify-start p-3 box-border gap-[48.5px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-silver font-outfit mq750:gap-[24px] ${className}`}
    >
      <div className="w-[297px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 gap-[42px] mq450:gap-[21px]">
          <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
            <div
              className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <img
                className="self-stretch w-[37.1px] relative max-h-full min-h-[31px]"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[83px] whitespace-nowrap">
                Packets
              </a>
            </div>
          </div>
          <select className="h-10 w-[122px] rounded-11xl bg-gray-500 box-border flex flex-row items-start justify-start py-2.5 px-5 font-outfit text-base [-webkit-text-fill-color:transparent] shrink-0 border-[2px] border-solid border-base-blue" />
        </div>
      </div>
      <div className="w-[366px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-xs font-plus-jakarta-sans">
        <div className="self-stretch h-[46px] rounded-13xl bg-gray-600 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-3.5 px-3.5 pb-4 border-[1px] border-solid border-whitesmoke">
          <div className="h-4 w-[152px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-4 w-4 relative"
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
            <a className="[text-decoration:none] h-[15px] w-[124px] relative font-medium text-[inherit] whitespace-pre-wrap inline-block shrink-0">
              Search for properties
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[17px] text-base text-ntblack">
        <div className="h-10 box-border hidden flex-row items-center justify-center py-2.5 px-5 border-b-[4px] border-solid border-base-blue">
          <div className="self-stretch relative font-medium">Explore</div>
        </div>
        <div className="rounded-15xl bg-white-base flex flex-row items-start justify-start py-2 px-[13px] gap-[11px] text-lg text-gray-700">
          <div className="h-10 w-[95px] box-border hidden border-b-[4px] border-solid border-base-blue" />
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[18.5px]">
              <img
                className="h-8 w-8 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                <div className="w-px h-[26px] relative bg-gray-700 box-border border-r-[1px] border-solid border-gray-700" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
                  xdh...qhjdf
                </a>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[7px] pr-4 pl-[19px] bg-ntblack w-[97px] rounded-11xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
            <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[58px]">
              Log Out
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AuctionNavbar;
