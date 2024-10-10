import { FunctionComponent, useEffect, useState } from "react";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
  useReadContract
  //useTransactionReceipt,
} from "wagmi";

import { contractABI, contractAddress } from "../abi/EstatePool";
import { ethers, toBigInt } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate,  } from "react-router-dom";
export type PropertyInfoContainerType = {
  className?: string;
  tokenId: string;
  nameOfAsset?: string;
};

const PropertyInfoContainer: FunctionComponent<PropertyInfoContainerType> = ({
  className = "",
  tokenId,
  nameOfAsset,
}) => {
  const [amount, setAmount] = useState("");
  const [bidAmount, setbidAmount] = useState("");
  const [apiResp, setApiResp] = useState(false);
  
  const { writeContract, data: hash } = useWriteContract();
  const { address } = useAccount();
  const navigate = useNavigate();

  const { isLoading: isTransactionLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });
     const result = useReadContract({
       abi: contractABI,
       address: contractAddress,
       functionName: "balanceOf",
       args: [`0x${address?.slice(2)}`, BigInt(tokenId)],
     });
     console.log(Number(result.data));
    const webprovider = new ethers.WebSocketProvider(
    "wss://base-sepolia.g.alchemy.com/v2/Kg-QkKBYxywIbXW70OhuxDpOde_Z-YlI"
  );
  // const webprovider = new ethers.WebSocketProvider(
  //   "https://polygon-amoy.infura.io/v3/3d846378caf040a899cd9d014a5741f7"
  // );
  
  const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    webprovider
  );
  const getEvent = async () => {
    console.log("Inside the event function");
    contract.on("AuctionCreated", (auctionId, creator, tokenId,amount) => {
      console.log("I got here");
      console.log("Creator", creator);
      console.log("tokenId", tokenId);
      console.log("auction:", Number(auctionId));
      console.log("amount:",amount);
      createAuction(Number(auctionId));
      //setApiResp(true);
    });
  };
  const createAuction = async (smartContractId: Number) => {
    try {
      const axResult = await axios.post("https://on-real.fly.dev/auction", {
        id: 0,
        nameOfAsset: nameOfAsset,
        tokenId: tokenId,
        initialBid: bidAmount,
        owner: address,
        tokenAmount: amount,
        smartContractId: smartContractId,
      });
      console.log(axResult.data);
      if ((axResult.status = 201)) {
        console.log("Called api");
        
        setApiResp(true);
      }
    } catch (error) {
      toast("error on api")
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "AuctionAsset",
        args: [BigInt(Number(tokenId)), toBigInt(amount)],
      });
      console.log("Transaction submitted:", result);
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };
      useEffect(() => {
        if (apiResp) {
          navigate(`/overview/${address}`);
        }
      }, [apiResp]);
      
  useEffect(() => {
    if (isTransactionLoading) {
      getEvent();
      console.log("Transaction Loading");
      toast("Transaction In Progress");
    }
    if (isTransactionSuccess) {
      getEvent();
      console.log(hash);
      toast("Auction Successfully Made");
    }
  }, [isTransactionLoading, isTransactionSuccess]);
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[36px] max-w-full text-left text-lg text-black font-outfit mq750:gap-[18px] mq1225:flex-wrap ${className}`}
    >
      <Toaster />
      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[391px] max-w-full mq1050:min-w-full">
        <div className="self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base flex flex-col items-start justify-start p-[18px] box-border gap-[21px] max-w-full z-[1]">
          <div className="flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
            <img
              className="h-[71px] w-[71px] relative rounded-[50%] object-cover min-h-[71px]"
              loading="lazy"
              alt=""
              src="/ellipse-385@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative font-semibold inline-block min-w-[88px]">
                Danielkinq
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <button className="cursor-pointer [border:none] py-[11px] px-3.5 bg-goldenrod rounded-11xl flex flex-row items-center justify-center hover:bg-darkgoldenrod-200">
                  <div className="relative text-xs font-medium font-outfit text-darkgoldenrod-100 text-left inline-block min-w-[44px]">
                    Investor
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-darkslategray-300 rounded-11xl flex flex-row items-center justify-center gap-[10px] whitespace-nowrap hover:bg-dimgray">
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/group-34526.svg"
                  />
                  <div className="relative text-xs font-medium font-outfit text-gray-400 text-left inline-block min-w-[96px]">
                    20 older investors
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
            <div className="relative font-medium text-center">
              Lekki Court Yard
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[6px] max-w-full text-xs text-gray-1000 mq750:flex-wrap">
              <img
                className="h-[17px] w-[17px] relative min-h-[17px]"
                loading="lazy"
                alt=""
                src="/vuesaxlinearlocation.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[353px] max-w-full mq1050:min-w-full">
                <div className="self-stretch relative">
                  N0 51, ADEKOLA str Lekki way, Island Lagos
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-sm text-gray-800">
              You are auctioning an asset to be sold
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 rounded-3xs flex flex-col items-end justify-start pt-[116px] px-2.5 pb-3.5 box-border gap-[120px] bg-[url('/public/rectangle-2688@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[30px] mq750:gap-[60px]">
              <img
                className="w-[566px] h-80 relative rounded-3xs object-cover hidden max-w-full"
                alt=""
                src="/rectangle-2688@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <img
                  className="h-[60px] w-[60px] relative rounded-31xl min-h-[60px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowcircleleft.svg"
                />
                <img
                  className="h-[60px] w-[60px] relative rounded-31xl min-h-[60px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowcircleright.svg"
                />
              </div>
              <div className="w-[523px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[3px] z-[1]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-gray-900" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-gray-900" />
                  </div>
                  <div className="h-2.5 w-2.5 relative rounded-[50%] bg-white-base" />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-gray-900" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-gray-900" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[4px] mq1050:flex-wrap">
            <img
              className="h-[113px] w-[110px] relative object-cover min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002276@2x.png"
            />
            <img
              className="h-[113px] w-[110px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002279.svg"
            />
            <img
              className="h-[113px] w-[110px] relative object-cover min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002280@2x.png"
            />
            <img
              className="h-[113px] w-[110px] relative object-cover min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002280@2x.png"
            />
            <img
              className="h-[113px] w-[110px] relative object-cover min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002280@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[438px] shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base overflow-hidden shrink-0 flex flex-col items-start justify-start p-[18px] box-border gap-[18.5px] min-w-[438px] max-w-full text-5xl text-gray-1100 mq1050:min-w-full mq1225:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[100px] pl-0 gap-[17px] text-center text-black mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-center">
                <div className="relative font-medium inline-block min-w-[82px] mq450:text-lgi">{`Auction `}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-left text-sm text-gray-1000">
            <div className="flex-1 flex flex-row items-start justify-center gap-[14px] mq450:flex-wrap">
              <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] flex-1 rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-center justify-center min-w-[65px] border-[2px] border-solid border-black hover:bg-darkslategray-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                <a className="[text-decoration:none] relative text-sm font-medium font-outfit text-gray-1000 text-left inline-block min-w-[60px]">
                  Overview
                </a>
              </button>
              <div className="flex-1 rounded-11xl flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[65px]">
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[58px]">
                  Analytics
                </a>
              </div>
              <div className="rounded-11xl flex flex-row items-center justify-center py-2.5 px-5 opacity-[0.01]">
                <div className="relative font-medium inline-block min-w-[36px]">
                  Older
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="self-stretch flex flex-row items-start justify-start gap-[15.7px] text-sm mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <div className="relative inline-block min-w-[112.7px]">
              Purchased Value
            </div>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
              $75,620
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <div className="self-stretch relative">Plots</div>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 mq450:text-lgi mq450:leading-[32px]">
              {Number(result?.data)}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <div className="self-stretch relative">Annual yield</div>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 mq450:text-lgi mq450:leading-[32px]">
              20%
            </div>
          </div>
        </div> */}
        <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15.7px] text-sm mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <a className="[text-decoration:none] self-stretch relative text-[inherit]">
              Profits (3 year)
            </a>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
              $45,372
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <div className="self-stretch relative">Plots</div>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 mq450:text-lgi mq450:leading-[32px]">
              {Number(result?.data)}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
            <div className="self-stretch relative">Annual yield</div>
            <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 mq450:text-lgi mq450:leading-[32px]">
              20%
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-14 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="rounded-md bg-gray-200 overflow-x-auto flex flex-row items-start justify-start py-[3px] px-1 gap-[9px] border-[0.5px] border-solid border-gray-1200">
            <div className="rounded-10xs [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] flex flex-row items-start justify-start py-1.5 px-2.5 gap-[10px] text-white-base">
              <div className="relative font-medium inline-block min-w-[31px] mq450:text-lgi">
                04
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-3xs">
                <div className="relative font-medium inline-block min-w-[23px]">
                  Days
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <div className="flex flex-col items-center justify-center gap-[8px]">
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-ntblack" />
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-ntblack" />
              </div>
            </div>
            <div className="rounded-10xs bg-aliceblue flex flex-row items-start justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="relative font-medium inline-block min-w-[31px] mq450:text-lgi">
                04
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-3xs text-gray-300">
                <div className="relative font-medium inline-block min-w-[16px]">
                  Hrs
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <div className="flex flex-col items-center justify-center gap-[8px]">
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-ntblack" />
                <div className="w-[3px] h-[3px] relative rounded-[50%] bg-ntblack" />
              </div>
            </div>
            <div className="rounded-10xs bg-aliceblue flex flex-row items-start justify-start py-1.5 px-2.5 gap-[10px]">
              <div className="relative font-medium inline-block min-w-[29px] mq450:text-lgi">
                30
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-3xs text-gray-300">
                <div className="relative font-medium inline-block min-w-[17px]">
                  min
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <label
            htmlFor="amount"
            className="text-sm font-medium text-gray-1000"
          >
            Enter auction amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="self-stretch py-2.5 px-4 bg-white-base rounded-11xl border-[1px] border-solid border-gray-1200 text-base text-gray-1000 outline-none"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <label
            htmlFor="amount"
            className="text-sm font-medium text-gray-1000"
          >
            Enter bid amount
          </label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={(e) => setbidAmount(e.target.value)}
            placeholder="Enter Bid"
            className="self-stretch py-2.5 px-4 bg-white-base rounded-11xl border-[1px] border-solid border-gray-1200 text-base text-gray-1000 outline-none"
          />
        </div>
        <button
          disabled={isTransactionLoading}
          onClick={handleSubmit}
          className="cursor-pointer py-2.5 px-5 bg-ntblack self-stretch rounded-11xl flex flex-row items-start justify-center whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue"
        >
          <div className="relative text-base font-outfit text-white-base text-left inline-block min-w-[97px]">
            Begin auction
          </div>
        </button>
      </div>
    </div>
  );
};

export default PropertyInfoContainer;
