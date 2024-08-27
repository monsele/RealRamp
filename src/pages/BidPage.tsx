import { FunctionComponent, useCallback, useEffect, useState } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { parseEther } from "viem";
import { contractABI, contractAddress } from "../abi/EstatePool";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { parseUnits, toBigInt,ethers } from "ethers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Auction } from "../utils/interfaces/interfaces";

const BidScreen: FunctionComponent = () => {
  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "Auction Screen/analytics" to the project
  }, []);
  const [offer, setoffer] = useState<string>("");
  const [plots, setPlots] = useState<string>("");
  const { writeContract, data: hash } = useWriteContract();
  const { address } = useAccount();
  const { smartId } = useParams();
  const { isLoading: isTransactionLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });
   

  const { data: auction } = useQuery<Auction>({
    queryKey: ["getAuctionById"],
    queryFn: async () => {
      const axRresult = await axios.get<Auction>(
        `https://on-real.fly.dev/auction/bysId/${smartId}`
      );
      setoffer(axRresult.data.initialBid);
      setPlots(axRresult.data.tokenAmount);
      console.log(auction);
      return axRresult.data;
    },
  });

  const navigate = useNavigate();
  const completeAuction = async () => {
    console.log("Called Api here");
    
    const axResponse = await axios.post(
      `https://on-real.fly.dev/payBid?smartContractId=${smartId}`
    );
    console.log(axResponse);
  };
  const handleSubmit = useCallback( () => {
    
     const result = writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "PayBid",
      args: [toBigInt(Number(smartId)), parseUnits(offer,"ether")],
      value: parseUnits(offer,"ether"),
    });
    
  }, [writeContract, offer, isTransactionLoading, isTransactionSuccess]);

  useEffect(() => {
    if (isTransactionLoading) {
      toast("Transaction In progress");
    }
    if (isTransactionSuccess) {
      completeAuction();
      toast("Bid completed Successfully");
     // setTimeout(() => {
        navigate(`/myassets/${address}`);
      //}, 3000);
    }
    if (!isTransactionSuccess && !isTransactionLoading) {
      toast("Bid failed: Make sure you pay the right amount");
    }
  }, [isTransactionLoading, isTransactionSuccess]);

  return (
    <div className="w-full h-[1024px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[149px] pb-[165px] box-border gap-[649px] leading-[normal] tracking-[normal] text-left text-sm text-white-base font-outfit mq450:gap-[162px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[324px] mq750:pl-[74px] mq750:pr-[74px] mq750:box-border mq1225:h-auto">
      <Toaster />

      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-[30px] box-border max-w-full shrink-0">
        <section className="flex-1 flex flex-col items-start justify-start gap-[30px] shrink-0 max-w-full text-left text-lg text-black font-outfit">
          {/* <header className="self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-[61px] bg-white-base flex flex-row items-start justify-start p-3 box-border gap-[48.5px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-ntblack font-outfit mq750:gap-[24px]">
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
            <div className="w-[366px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch rounded-[32px] bg-gray-600 overflow-hidden flex flex-row items-start justify-start pt-3 px-3.5 pb-3.5 border-[1px] border-solid border-whitesmoke-100">
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
            </div>
            <div className="flex flex-row items-start justify-start gap-[17px] text-base">
              <div className="h-10 box-border hidden flex-row items-center justify-center py-2.5 px-5 border-b-[4px] border-solid border-base-blue">
                <div className="self-stretch relative font-medium">Explore</div>
              </div>
              <div className="rounded-[34px] bg-white-base flex flex-row items-start justify-start py-2 px-[13px] gap-[11px] text-lg text-gray-1100">
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
                      <div className="w-px h-[26px] relative bg-gray-1100 box-border border-r-[1px] border-solid border-gray-1100" />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
                        xdh...qhjdf
                      </a>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer py-[7px] pr-4 pl-[19px] bg-ntblack w-[97px] rounded-11xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-100">
                  <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[58px]">
                    Log Out
                  </a>
                </button>
              </div>
            </div>
          </header> */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[36px] max-w-full mq750:gap-[18px] mq1225:flex-wrap">
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
                      <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-darkslategray-400 rounded-11xl flex flex-row items-center justify-center gap-[10px] whitespace-nowrap hover:bg-dimgray-100">
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
                  <div className="self-stretch flex flex-row items-start justify-center gap-[6px] max-w-full text-xs text-gray-900 mq750:flex-wrap">
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
                  <div className="self-stretch relative text-sm text-gray-700">
                    Ensure to give a convincing description of your properties
                    to help potential buyers notice you quick
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
                          <div className="w-2 h-2 relative rounded-[50%] bg-gray-800" />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-2 h-2 relative rounded-[50%] bg-gray-800" />
                        </div>
                        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-white-base" />
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-2 h-2 relative rounded-[50%] bg-gray-800" />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-2 h-2 relative rounded-[50%] bg-gray-800" />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-2 h-2 relative rounded-[50%] bg-gray-800" />
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
            <div className="w-[438px] shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base overflow-hidden shrink-0 flex flex-col items-start justify-start p-[18px] box-border gap-[18.5px] min-w-[438px] max-w-full text-sm text-gray-300 mq1050:min-w-full mq1225:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[100px] pl-0 gap-[17px] text-center text-5xl text-black mq450:pr-5 mq450:box-border">
                <div className="w-[212px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-center">
                      <h2 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[82px] mq450:text-lgi">{`Auction `}</h2>
                    </div>
                    {/* <button className="cursor-pointer py-[7px] px-3 bg-[transparent] flex-1 rounded-11xl flex flex-row items-center justify-center gap-[10px] border-[2px] border-solid border-base-blue hover:bg-skyblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-100">
                      <img
                        className="h-4 w-4 relative min-h-[16px]"
                        alt=""
                        src="/vuesaxlinearclock.svg"
                      />
                      <div className="relative text-xs font-medium font-outfit text-gray-400 text-left inline-block min-w-[66px]">
                        3hrs : 30min
                      </div>
                    </button> */}
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-left text-sm text-gray-900">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
                    <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] flex-1 rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-center justify-center min-w-[65px] border-[2px] border-solid border-black hover:bg-darkslategray-500 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                      <div className="relative text-sm font-medium font-outfit text-gray-900 text-left inline-block min-w-[60px]">
                        Overview
                      </div>
                    </button>
                    <div
                      className="flex-1 rounded-11xl flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[65px] cursor-pointer"
                      onClick={onFrameContainerClick1}
                    >
                      <div className="relative font-medium inline-block min-w-[58px]">
                        Analytics
                      </div>
                    </div>
                    <div className="rounded-11xl flex flex-row items-center justify-center py-2.5 px-5 opacity-[0.01]">
                      <div className="relative font-medium inline-block min-w-[36px]">
                        Older
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[15.7px] text-black-1000 mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                  <div className="self-stretch relative text-black dark:text-white">
                    Total value
                  </div>
                  <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-black dark:text-white whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
                    $75,620
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                  <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                  <div className="self-stretch relative text-black dark:text-white">
                    Plots
                  </div>
                  <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-black dark:text-white mq450:text-lgi mq450:leading-[32px]">
                    {plots}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                  <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                  <div className="self-stretch relative text-black dark:text-white">
                    Annual yield
                  </div>
                  <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-black dark:text-white mq450:text-lgi mq450:leading-[32px]">
                    20%
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium inline-block min-w-[99px] text-black dark:text-white">
                  Enter your offer
                </div>
                <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-end justify-start pt-[9px] px-4 pb-3 gap-[186px] text-5xl text-black-200 border-[1px] border-solid border-whitesmoke-200 mq450:gap-[93px] mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px] text-black dark:text-white">
                    <input
                      type="text"
                      defaultValue={offer}
                      disabled={true}
                      // onChange={(e) => {
                      //   setoffer(e.target.value);
                      // }}
                      className="relative tracking-[0.01em] min-w-[62px] mq450:text-lgi text-black dark:text-white border-none focus:outline-none focus:ring-0 font-inherit text-inherit"
                    />
                  </div>
                  <div className="h-10 flex flex-row items-start justify-start gap-[30px] text-base text-darkslategray-300">
                    <div className="h-[41px] w-px relative box-border z-[1] border-r-[1px] border-solid border-darkslategray-300" />
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="relative tracking-[0.01em] inline-block min-w-[43px] z-[1]">
                        ETH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="cursor-pointer py-2.5 px-5 bg-ntblack self-stretch rounded-11xl flex flex-row items-start justify-center whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-100"
              >
                <div className="relative text-base font-outfit text-white-base text-left inline-block min-w-[65px]">
                  Place bid
                </div>
              </button>
              {/* <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative font-medium inline-block min-w-[74px]">
                  Winning bid
                </div>
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-white-base flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[12px] text-lg text-gray-1100 mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[18.5px]">
                    <img
                      className="h-8 w-8 relative rounded-[50%] object-cover"
                      alt=""
                      src="/ellipse-1@2x.png"
                    />
                    <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                      <div className="w-px h-[26px] relative bg-gray-1100 box-border border-r-[1px] border-solid border-gray-1100" />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="relative">xdh...qhftuimjdf</div>
                    </div>
                  </div>
                  <div className="flex-1 relative leading-[40px] font-semibold font-title-price text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right inline-block min-w-[118px]">
                    75,00USD
                  </div>
                </div>
              </div> */}
              <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
              </div>
              <select className="self-stretch h-6 bg-[transparent] [border:none] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border font-outfit font-medium text-sm text-gray-300" />
            </div>
          </div>
        </section>
      </main>
      <div className="w-[106px] h-9 relative [backdrop-filter:blur(4px)] rounded-[37px] bg-gray-1300 hidden whitespace-nowrap">
        <img
          className="absolute top-[6px] left-[10px] w-6 h-6"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className="absolute top-[9px] left-[46px] font-medium inline-block min-w-[50px]">
          200 like
        </div>
      </div>
      <img
        className="w-[35px] h-[35px] relative shrink-0"
        alt=""
        src="/group-1000002260.svg"
      />
    </div>
  );
};

export default BidScreen;
