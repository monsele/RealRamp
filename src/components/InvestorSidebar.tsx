import { FunctionComponent, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
export type FrameComponentType = {
  className?: string;
};

const InvestorSidebar: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
    const { address, isConnected } = useAccount();
  const onMenuItemsClick = useCallback(() => {
    // Please sync "Investors Properties" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[25px] text-left text-9xl text-black font-outfit ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[70px] mq700:pl-5 mq700:pr-5 mq700:box-border">
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <img
            className="w-[106px] h-[106px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-385@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit mq700:text-3xl">
              Danielkinq
            </h2>
            <button className="cursor-pointer [border:none] py-2.5 px-12 bg-goldenrod rounded-11xl flex flex-row items-center justify-center hover:bg-darkgoldenrod-200">
              <div className="relative text-base font-medium font-outfit text-darkgoldenrod-100 text-left inline-block min-w-[59px]">
                Investor
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 px-[19px] box-border">
        <div className="h-0 flex-1 relative box-border border-t-[0.5px] border-solid border-gray-200" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[24px] text-lg">
        <button
          className="cursor-pointer py-3.5 px-6 bg-ntblack self-stretch rounded-3xs flex flex-row items-start justify-start gap-[10px] border-[3px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[3px] hover:border-solid hover:border-skyblue"
          onClick={onMenuItemsClick}
        >
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/vuesaxlinearhome2.svg"
          />
          <div className="relative text-lg font-outfit text-white-base text-left inline-block min-w-[77px]">
            Overview
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearcategory2.svg"
          />
          <Link
            to={"/properties"}
            className="relative inline-block min-w-[112px]"
          >
            My Properties
          </Link>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearcategory2.svg"
          />
          <Link
            to={`/myAssets/${
              address !== undefined ? address : "Not-connected"
            }`}
            className="relative inline-block min-w-[112px]"
          >
            My Assets
          </Link>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearsetting2.svg"
          />
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px]">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestorSidebar;


