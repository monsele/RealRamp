import { FunctionComponent, useCallback, useState } from "react";
import OverviewSidebar from "../components/SidebarResponsive";
import TabCard from "../components/TabCard";
import PropCard from "../components/PropCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAccount } from "wagmi";
import {PropertyType} from "../utils/interfaces/interfaces"
import { Link } from "react-router-dom";
const PropertyManagersProps: FunctionComponent = () => {
  
  const onListButtonClick = useCallback(() => {
    // Please sync "Publish Property" to the project
  }, []);
  const { address } = useAccount();
  const { data, isLoading } = useQuery({
    queryKey: ["propertyByOwner"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://on-real.fly.dev/PropertiesByOwner/${address}`
      );
      return data as PropertyType[];
    },
  });
  console.log(data);
   if (isLoading) {
     return <div>Loading...</div>;
   }
  return (
    <div className="w-full h-[1183px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[325px] leading-[normal] tracking-[normal] text-left text-5xl font-outfit lg:h-auto lg:gap-[162px] mq450:gap-[41px] mq750:gap-[81px]">
      <main className="w-[1382px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[45px] shrink-0 max-w-full text-left text-5xl font-outfit mq750:gap-[22px]">
        <div className="w-[328px] shadow-[2px_4px_30px_#e9eefd] rounded-tl-none rounded-tr-lg rounded-b-none bg-white-base overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 pb-[591px] pr-3 pl-0 box-border gap-[49.7px] max-w-full z-[1] mq450:gap-[25px] mq750:pt-5 mq750:pb-[250px] mq750:box-border mq1050:pt-[21px] mq1050:pb-96 mq1050:box-border">
          <div className="w-[296.1px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="self-stretch w-[37.1px] relative max-h-full min-h-[31px] shrink-0"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[83px] shrink-0 mq450:text-lgi">
                Packets
              </a>
            </div>
          </div>
          <OverviewSidebar />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[643px] max-w-full text-left text-5xl text-ntblack font-outfit mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[21px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-0 pl-3 box-border gap-[64px] max-w-full mq750:gap-[16px] mq1050:flex-wrap mq1050:gap-[32px]">
                <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-6 h-6 relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearcategory2-1.svg"
                      />
                    </div>
                    <a className="[text-decoration:none] relative text-[inherit] mq450:text-lgi">
                      My Properties
                    </a>
                  </div>
                </div>
                <nav className="m-0 flex-1 rounded-[34px] bg-white-base box-border flex flex-row items-start justify-start py-1.5 px-3 gap-[11px] min-w-[474px] max-w-full whitespace-nowrap text-left text-lg text-gray-400 font-outfit border-[1px] border-solid border-base-blue mq750:flex-wrap mq750:min-w-full">
                  <div className="h-10 w-[95px] box-border hidden border-b-[4px] border-solid border-base-blue" />
                  <div className="flex-1 rounded-[32px] bg-gray-300 box-border overflow-hidden flex flex-row items-start justify-start pt-3 px-3.5 pb-3.5 gap-[12px] min-w-[140px] max-w-full border-[1px] border-solid border-whitesmoke-100">
                    <img
                      className="h-4 w-4 relative min-h-[16px]"
                      alt=""
                      src="/vuesaxlinearsearchnormal.svg"
                    />
                    <input
                      className="w-[124px] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-[12px] bg-[transparent] h-[15px] relative text-silver whitespace-pre-wrap text-left inline-block p-0"
                      placeholder="Search for  properties"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[18.7px]">
                      <div className="h-8 w-8 relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full"
                          loading="lazy"
                          alt=""
                          src="/vuesaxlinearnotification.svg"
                        />
                        <div className="absolute top-[0px] left-[19px] rounded-[50%] bg-firebrick w-[9px] h-[9px] z-[1]" />
                      </div>
                      <img
                        className="h-8 w-8 relative rounded-[50%] object-cover min-h-[32px]"
                        loading="lazy"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                        <div className="w-px h-[26px] relative bg-gray-400 box-border border-r-[1px] border-solid border-gray-400" />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[98px]">
                          xdh...qhjdf
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-[97px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                    <button className="cursor-pointer py-[7px] pr-4 pl-[19px] bg-ntblack self-stretch rounded-11xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-100">
                      <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[58px]">
                        Log Out
                      </a>
                    </button>
                  </div>
                </nav>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0 box-border max-w-full text-base text-black">
                <div className="flex-1 flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                      <div className="flex-1 relative font-medium inline-block max-w-full">
                        Activity Overview
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[14px] text-sm text-typography-3 font-title-price mq1050:flex-wrap">
                      <TabCard
                        totalYield="My Profits"
                        yieldSeparators="$7,879"
                        eTH="0.005ETH"
                        vuesaxlinearmoneyRecive="/vuesaxlinearmoneyrecive.svg"
                      />
                      <TabCard
                        totalYield="Total Volume"
                        yieldSeparators="$75,620"
                        eTH="0.1ETH"
                        vuesaxlinearmoneyRecive="/vuesaxlineardollarcircle.svg"
                      />
                      <div className="flex-1 shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base flex flex-row items-start justify-start py-[20.5px] px-[18px] box-border gap-[28px] min-w-[189px] max-w-[236px]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[107px]">
                            Total Properties
                          </div>
                          <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 mq450:text-lgi mq450:leading-[32px]">
                            520
                          </div>
                        </div>
                        <div className="w-[54px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                          <div className="self-stretch h-[54px] relative">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightseagreen w-full h-full" />
                            <img
                              className="absolute top-[15px] left-[15px] w-6 h-6 z-[1]"
                              loading="lazy"
                              alt=""
                              src="/vuesaxlinearhouse.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base flex flex-row items-start justify-start py-[20.5px] px-[18px] box-border gap-[11px] min-w-[189px] max-w-[236px]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="relative leading-[22px] font-medium">
                            Released Properties
                          </div>
                          <div className="w-[118px] relative text-5xl leading-[40px] font-semibold text-typography-1 flex items-center mq450:text-lgi mq450:leading-[32px]">
                            32
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <img
                            className="w-[54px] h-[54px] relative"
                            loading="lazy"
                            alt=""
                            src="/group-1000002264.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-[5px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
                        <div className="flex-1 relative font-medium inline-block max-w-full">
                          My Properties
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-sm text-gray-700 mq1050:flex-wrap">
                        <div className="w-[738px] flex flex-row items-start justify-start gap-[42px] max-w-full mq750:flex-wrap mq750:gap-[21px]">
                          <div className="rounded-11xl flex flex-row items-center justify-center py-2.5 px-5">
                            <div className="relative font-medium inline-block min-w-[60px]">
                              Published
                            </div>
                          </div>
                          <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[133px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                            <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[93px]">
                              Saved for later
                            </div>
                          </button>
                          <div className="rounded-11xl flex flex-row items-center justify-center py-2.5 px-5">
                            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[57px]">
                              Investors
                            </a>
                          </div>
                          <div className="flex flex-row items-start justify-start text-gray-500">
                            <div className="rounded-[35px] overflow-hidden flex flex-row items-center justify-center py-[9px] px-[11px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200">
                              <img
                                className="h-[18px] w-[18px] relative min-h-[18px]"
                                loading="lazy"
                                alt=""
                                src="/vuesaxlinearelement4.svg"
                              />
                              <div className="relative inline-block min-w-[78px]">
                                All Category
                              </div>
                            </div>
                          </div>
                          <div className="rounded-11xl flex flex-row items-center justify-center py-2.5 px-5 opacity-[0.01]">
                            <div className="relative font-medium inline-block min-w-[70px]">
                              Apartment
                            </div>
                          </div>
                        </div>
                        <Link to={`/publish`}
                          className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[143px] rounded-11xl [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] box-border flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-skyblue-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-100"
                        
                        >
                          <div className="relative text-base font-outfit text-white-base text-left inline-block min-w-[103px]">
                            List Properties
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
                <div className="flex-1 grid flex-row items-start justify-start gap-[12px] max-w-full grid-cols-[repeat(3,_minmax(236px,_1fr))] mq450:grid-cols-[minmax(236px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(236px,_409px))]">
                  {data?.map((item, index) => (
                    <PropCard
                      key={index}
                      title={item.propertyTitle}
                      LocationAddress={item.propertyLocation}
                      Price={item.price.toString() + " ETH"}
                      Yield={item.annualYield + " %"}
                      Action="View Details"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        className="w-[37.1px] h-[31.3px] relative hidden"
        alt=""
        src="/group-1.svg"
      />
      <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden min-w-[83px] mq450:text-lgi">
        Packets
      </div>
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

export default PropertyManagersProps;
