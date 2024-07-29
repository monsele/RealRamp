import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {useAccount} from 'wagmi'
export type MyAssetSideBarSidebarType = {
  className?: string;
};

const MyAssetSideBarSidebar: FunctionComponent<MyAssetSideBarSidebarType> = ({
  className = "",
}) => {
  const {address, isConnected} = useAccount();
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[25px] text-left text-9xl text-black font-outfit ${className}`}
    >
      <div className="flex flex-row items-start justify-end py-0 px-[37px]">
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <img
            className="w-[106px] h-[106px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-385@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl">
              Danielkinq
            </h1>
            <button className="cursor-pointer [border:none] py-2.5 px-12 bg-darkcyan-200 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkturquoise">
              <div className="relative text-base font-medium font-outfit text-darkcyan-100 text-left">
                Property Manager
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-end py-0 px-[19px] box-border">
        <div className="h-0 flex-1 relative box-border border-t-[0.5px] border-solid border-gray-200" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[24px] text-lg text-ntblack">
        <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-[18px] px-6 gap-[10px]">
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
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]"
          >
            Overview
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
            to={"/properties"}
            className="relative inline-block min-w-[112px]"
          >
            My Properties
          </Link>
        </div>
        <button className="cursor-pointer py-3.5 px-6 bg-ntblack self-stretch rounded-3xs flex flex-row items-start justify-start gap-[10px] whitespace-nowrap border-[3px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[3px] hover:border-solid hover:border-skyblue-100">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/vuesaxlinearcategory2.svg"
          />
          <div className="relative text-lg font-outfit text-white-base text-left inline-block min-w-[112px]">
            My Assets
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-6 gap-[10px] text-black">
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

export default MyAssetSideBarSidebar;
