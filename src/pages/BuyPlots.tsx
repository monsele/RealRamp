import { FormEvent, FunctionComponent, useCallback, useEffect, useState } from "react";
import ExploreNavBar from "../components/ExploreNavBar";
import { contractABI, contractAddress } from "../abi/EstatePool";
import { useNavigate, useParams } from "react-router-dom";
import {
  useReadContract,
  useWriteContract,
  useAccount,
  useWaitForTransactionReceipt,
 } from "wagmi";
import { parseEther, toBigInt, parseUnits } from "ethers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PropertyType } from "../utils/interfaces/interfaces";
import toast,{Toaster} from "react-hot-toast";
const BuyPlots: FunctionComponent = () => {
  const [plotAmount, setplotAmount] = useState(0);
  const [priceSize, setPriceSize] = useState(0);
  const [price, setprice] = useState(0)
  const { tokenId } = useParams<string>();
  const { data } = useQuery({
    queryKey: ["getPropertyBySmartId"],
    queryFn: async () => {
      const { data } = await axios.get(`https://localhost:7280/getbysmartId/${tokenId}`);
      setprice(data.price);
      return data as PropertyType;
    },
  });

  console.log(data);
  const result = useReadContract({
    abi: contractABI,
    address: contractAddress,
    functionName: "availaibleTokenAmount",
    args: [toBigInt(Number(tokenId))],
  });
  const { isConnected, address } = useAccount();
  const { writeContract, data:hash } = useWriteContract();
  const navigate = useNavigate();
const { isLoading: isTransactionLoading, isSuccess: isTransactionSuccess } =
  useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isTransactionLoading) {
      toast("Loading...")
    }
   if (isTransactionSuccess) {
    setTimeout(() => {
      navigate(`/overview/${address}`);
    }, 5000);
      
   }
  }, [isTransactionLoading,isTransactionSuccess])
  
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!isConnected) {
        console.error("Wallet not connected");
        return;
      }

      try {
          writeContract({
            address: contractAddress,
            abi: contractABI,
            functionName: "BuyPlot",
            args: [
              toBigInt(Number(tokenId)),
              toBigInt(plotAmount),
              parseUnits((plotAmount * price).toString(), "ether"),
            ],
            value: parseUnits((plotAmount * price).toString(), "ether"),
          });
      // }, 10);
        
      } catch (error) {
        console.error("Error in writeContract:", error);
      }
    },
    [writeContract, isConnected,plotAmount,price,priceSize]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[1024px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[149px] pb-[175px] box-border gap-[659px] leading-[normal] tracking-[normal] mq800:gap-[329px] mq800:pl-[74px] mq800:pr-[74px] mq800:box-border mq450:gap-[165px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:h-auto"
    >
      <Toaster/>
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[30px] box-border max-w-full shrink-0">
        <section className="flex-1 flex flex-col items-start justify-start gap-[23px] shrink-0 max-w-full text-left text-lg text-black font-outfit">
          <ExploreNavBar />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[43px] max-w-full mq800:gap-[21px] mq1350:flex-wrap">
              <div className="flex-1 shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base flex flex-col items-start justify-start py-[18px] pr-3.5 pl-[18px] box-border gap-[20.5px] min-w-[391px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                    <div className="w-[346px] flex flex-col items-start justify-start gap-[22px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
                        <img
                          className="h-[71px] w-[71px] relative rounded-[50%] object-cover min-h-[71px]"
                          loading="lazy"
                          alt=""
                          src="/ellipse-385@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[172px]">
                          <div className="relative font-semibold inline-block min-w-[88px]">
                            Danielkinq
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-xs text-darkcyan-100 mq450:flex-wrap">
                            <div className="rounded-11xl bg-darkcyan-200 flex flex-row items-center justify-center py-[11px] px-3.5 whitespace-nowrap">
                              <div className="relative font-medium inline-block min-w-[100px]">
                                Property Manager
                              </div>
                            </div>
                            <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-darkslategray-300 rounded-11xl flex flex-row items-center justify-center gap-[10px] whitespace-nowrap hover:bg-dimgray-100">
                              <img
                                className="h-4 w-4 relative min-h-[16px]"
                                alt=""
                                src="/group-34526.svg"
                              />
                              <div className="relative text-xs font-medium font-outfit text-gray-400 text-left inline-block min-w-[73px]">
                                200 Investors
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative font-medium text-center">
                        Lekki Court Yard
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-sm text-white-base">
                      <div className="[backdrop-filter:blur(4px)] rounded-[37px] bg-gray-700 flex flex-row items-start justify-start py-1.5 px-2.5 gap-[12px] z-[1]">
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          alt=""
                          src="/vuesaxlinearheart.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[50px]">
                            200 likes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[6px] max-w-full text-xs text-gray-800 mq800:flex-wrap">
                    <img
                      className="h-[17px] w-[17px] relative min-h-[17px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearlocation.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[353px] max-w-full mq800:min-w-full">
                      <div className="self-stretch relative">
                        {data?.propertyLocation}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-sm text-gray-1100">
                    Ensure to give a convincing description of your properties
                    to help potential buyers notice you quick
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 rounded-3xs flex flex-col items-end justify-start pt-[116px] px-2.5 pb-3.5 box-border gap-[120px] bg-[url('/public/rectangle-2688@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[60px] mq450:gap-[30px]">
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
                <div className="self-stretch flex flex-row items-start justify-center gap-[4px] mq800:flex-wrap">
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
              <div className="w-[438px] shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base overflow-hidden shrink-0 flex flex-col items-start justify-start p-[18px] box-border gap-[18.4px] min-w-[438px] max-w-full text-sm text-gray-300 mq1125:min-w-full mq1350:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start gap-[15.7px] text-gray-1000 mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                    <div className="self-stretch relative text-black">
                      Total value
                    </div>
                    <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 text-black whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
                      $75,620
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                    <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                    <div className="self-stretch relative text-black">
                      Units
                    </div>
                    <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 text-black mq450:text-lgi mq450:leading-[32px]">
                      {result.data?.toString()}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                    <div className="w-[0.5px] h-[45.5px] relative box-border border-r-[0.5px] border-solid border-gray-1200" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[73px]">
                    <div className="self-stretch relative text-black">
                      Unit value
                    </div>
                    <div className="self-stretch relative text-5xl leading-[40px] font-semibold font-title-price text-typography-1 text-black whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
                      ${data?.price}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
                </div>
                <div className="w-[347px] flex flex-col items-start justify-start gap-[10px] max-w-full text-5xl">
                  <div className="h-[30px] relative font-medium inline-block min-w-[126px] text-black">
                    <span>20%</span>
                    <span className="text-sm"> Annual yield</span>
                  </div>
                  <div className="self-stretch relative text-sm text-gray-1100 whitespace-pre-wrap text-black">
                    {data?.propertyDescription}
                  </div>
                </div>
                <div className="self-stretch h-[0.6px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.6px] border-solid border-gray-1200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium text-black">
                    Enter number of units you want
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-xs text-gray-200 mq450:flex-wrap">
                    <div className="w-32 rounded-3xs bg-dimgray-200 box-border flex flex-row items-start justify-start py-[23px] px-4 border-[1px] border-solid border-whitesmoke-200">
                      <input
                        type="text"
                        defaultValue="100"
                        value={plotAmount}
                        className="w-full bg-transparent border-none outline-none text-black text-xs tracking-[0.01em]"
                        onChange={(e) => setplotAmount(Number(e.target.value))}
                      />
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start relative min-w-[172px]">
                      <div className="flex-1 rounded-3xs bg-dimgray-200 flex flex-row items-start justify-start py-[23px] px-4 border-[1px] border-solid border-whitesmoke-200">
                        <input
                          type="text"
                          defaultValue="2000"
                          value={plotAmount*price}
                          //onChange={() => setPriceSize(plotAmount * price)}
                          className="w-full bg-transparent border-none outline-none text-black text-xs tracking-[0.01em]"
                        />
                      </div>
                      <div className="h-[41px] w-px absolute !m-[0] top-[11px] right-[121px] box-border z-[1] border-r-[1px] border-solid border-darkslategray-200" />
                      <div className="absolute !m-[0] top-[21px] right-[47px] text-base tracking-[0.01em] text-darkslategray-200 inline-block min-w-[43px] z-[1]">
                        USDT
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer py-2.5 px-5 bg-ntblack self-stretch rounded-11xl flex flex-row items-start justify-center whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue"
                >
                  <span className="relative text-base font-outfit text-white-base text-left inline-block min-w-[63px]">
                    Pay Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        className="w-[35px] h-[35px] relative shrink-0"
        alt=""
        src="/group-1000002260.svg"
      />
    </form>
  );
};

export default BuyPlots;
