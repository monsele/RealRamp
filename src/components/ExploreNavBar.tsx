import { FunctionComponent, useCallback,useEffect, useState } from "react";
import {WalletComponents} from './Login'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount} from "wagmi";
import {Link} from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
export type ExploreNavBarType = {
  className?: string;
};


const ExploreNavBar: FunctionComponent<ExploreNavBarType> = ({
  className = "",
}) => {
  const onActionButtonsContainerClick = useCallback(() => {
    // Please sync "CONNECTED WALLET" to the project
  }, []);
const { isConnected,address } = useAccount();

useEffect(() => {
  if (isConnected) {
    toast("User Connected")
    console.log(address);
    return;
  }
 console.log("Nothing here ....!");
 
}, [isConnected]);
  

return (
  <div
    className={`w-[1195px] flex flex-col items-start justify-start gap-[13px] top-[0] z-[99] sticky max-w-full text-left text-sm text-gray-500 font-outfit ${className}`}
  >
    <Toaster/>
    <header className="self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-42xl bg-white-base flex flex-row items-start justify-between p-3 box-border max-w-full gap-[20px] text-left text-5xl text-ntblack font-outfit">
      <div className="w-[297px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 gap-[42px] mq450:gap-[21px]">
          <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
            <div
              className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
              onClick={onActionButtonsContainerClick}
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
          <div className="w-[122px] rounded-11xl bg-gray-200 box-border flex flex-row items-start justify-start py-[7px] px-[18px] gap-[4px] shrink-0 text-base border-[2px] border-solid border-base-blue">
            <a className="[text-decoration:none] relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[58px]">
              Country
            </a>
            <img
              className="h-5 w-5 relative object-contain min-h-[20px]"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[366px] rounded-13xl bg-gray-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-3 px-3.5 pb-3.5 max-w-full border-[1px] border-solid border-whitesmoke">
        <div className="w-[152px] flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-4 w-4 relative min-h-[16px]"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <input
            className="w-[calc(100%_-_16px)] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-xs bg-[transparent] h-[15px] flex-1 relative text-silver whitespace-pre-wrap text-left inline-block min-w-[74px] shrink-0 p-0"
            placeholder="Search for  properties"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-base">
        <div className="flex flex-row items-start justify-start gap-[17px] lg:hidden">
          <div className="self-stretch hidden flex-row items-center justify-center py-2.5 px-5 border-b-[4px] border-solid border-base-blue">
            <div className="self-stretch relative font-medium">Explore</div>
          </div>
          <div className="rounded-11xl flex flex-row items-start justify-start py-2.5 px-5">
            <Link
              to="/publish"
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[103px] whitespace-nowrap"
            >
              List properties
            </Link>
          </div>
          <ConnectButton label="Login" />
          {/* <button className="cursor-pointer py-[7px] px-[18px] bg-ntblack w-[83px] rounded-11xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
              <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[43px]">
                Log in
              </a>
            </button> */}
        </div>
      </div>
    </header>
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
      <div className="w-[515px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:hidden">
        <div className="rounded-11xl flex flex-row items-start justify-start py-2.5 px-5">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[38px]">
            Lands
          </a>
        </div>
        <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[85px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-start justify-start border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
          <a className="[text-decoration:none] relative text-sm font-medium font-outfit text-gray-500 text-left inline-block min-w-[45px]">
            Houses
          </a>
        </button>
        <div className="rounded-11xl flex flex-row items-start justify-start py-2.5 px-5">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[76px]">
            Commercial
          </a>
        </div>
        <div className="rounded-11xl flex flex-row items-start justify-start py-2.5 px-5">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[70px]">
            Apartment
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default ExploreNavBar;
