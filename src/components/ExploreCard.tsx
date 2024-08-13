import { FunctionComponent } from "react";
import {Link} from 'react-router-dom';
import { useReadContract } from "wagmi";
import { contractABI, contractAddress } from "../abi/EstatePool";
import { toBigInt, formatUnits } from "ethers";
export type ExploreCardType = {
  className?: string;
  propertyTitle: string;
  propertyLocation: string;
  plots?: string;
  price: Number;
  smartContractId:Number;
};

const ExploreCard: FunctionComponent<ExploreCardType> = ({
  className = "",
  propertyTitle,
  plots,
  price,
  propertyLocation,
  smartContractId
}) => {
   const result = useReadContract({
     abi: contractABI,
     address: contractAddress,
     functionName: "availaibleTokenAmount",
     args: [toBigInt(smartContractId.toString())],
   });
   console.log(result.data);
  return (
    <div
      className={`w-[262px] shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[16px] text-left text-base text-ntblack font-outfit ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[149px] px-[15px] pb-[21px] relative gap-[10px]">
        <img
          className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 z-[1]">
          <div className="flex flex-row items-center justify-center gap-[3px]">
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-400" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-400" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white-base" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-400" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-400" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[18px] gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold">
            {propertyTitle}
          </div>
          <div className="self-stretch relative text-sm text-gray-500">
            {propertyLocation}
          </div>
        </div>
        <div className="h-5 flex flex-row items-start justify-start py-0 pr-7 pl-0 box-border gap-[19.8px] text-sm">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[84px]">
              <span>{price.toString()}</span>
              <span className="text-xs text-gray-500">MIN</span>
            </div>
          </div>
          <div className="h-[20.5px] w-[0.5px] relative box-border border-r-[0.5px] border-solid border-gray-600" />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[74px]">
              {result?.data?.toString()} Plots
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[78px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="rounded-11xl flex flex-row items-start justify-start py-2 px-6">
          <Link
            to={`/buyPlot/${smartContractId}`}
            className="relative font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[57px]"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
