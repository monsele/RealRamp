import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {useAccount} from 'wagmi'
export type MyAssetSideBarSidebarType = {
  className?: string;
};

const MyAssetSideBarSidebar: FunctionComponent<MyAssetSideBarSidebarType> = ({
  className = "",
}) => {
  const {address} = useAccount();
  return (
    <div
      className={`sticky top-0 h-screen overflow-y-auto self-stretch flex flex-col items-end justify-start gap-[25px] text-left text-9xl text-black font-outfit ${className}`}
    >
      <div className="flex flex-row items-start justify-end py-0 px-[37px] sm:px-[20px]">
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <img
            className="w-[106px] h-[106px] relative rounded-[50%] object-cover sm:w-[80px] sm:h-[80px]"
            loading="lazy"
            alt=""
            src="/ellipse-385@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl sm:text-2xl">
              {`${address?.slice(0, 7)}...`}
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-end py-0 px-[19px] box-border sm:px-[10px]">
        <div className="h-0 flex-1 relative box-border border-t-[0.5px] border-solid border-gray-200" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[24px] text-lg text-ntblack sm:gap-[12px]">
        <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-[18px] px-6 gap-[10px] sm:py-[12px] sm:px-4">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearhome2.svg"
          />
          <Link
            to={`/overview/${
              address !== undefined ? address : "Not-connected"
            }`}
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px] sm:min-w-[60px]"
          >
            Overview
          </Link>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px] sm:py-[12px] sm:px-4">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearcategory2.svg"
          />
          <Link
            to={"/properties"}
            className="relative inline-block min-w-[112px] sm:min-w-[80px]"
          >
            My Properties
          </Link>
        </div>
        <button className="cursor-pointer py-3.5 px-6 bg-ntblack self-stretch rounded-3xs flex flex-row items-start justify-start gap-[10px] whitespace-nowrap border-[3px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[3px] hover:border-solid hover:border-skyblue-100 sm:py-2 sm:px-4">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/vuesaxlinearcategory2.svg"
          />
          <div className="relative text-lg font-outfit text-white-base text-left inline-block min-w-[112px] sm:min-w-[80px]">
            My Assets
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px] text-black sm:py-[12px] sm:px-4">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/vuesaxlinearsetting2.svg"
          />
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px] sm:min-w-[50px]">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyAssetSideBarSidebar;
