import { FunctionComponent } from "react";
import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
export type ContentType = {
  className?: string;
};
type Data = {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
};


const ActivityOverview: FunctionComponent<ContentType> = ({ className = "" }) => {
// const {data} = useQuery({
//   queryKey:["fore"],
//   queryFn: async () => {
//     const { data } = await axios.get("https://localhost:7280/weatherforecast");
//     return data as Data[];
//   }, 
// });


// console.log(data);
  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[641px] max-w-full text-left text-5xl text-ntblack font-outfit mq450:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[11px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[21px] pr-px pl-[5px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[67px] max-w-full mq450:gap-[17px] mq925:flex-wrap mq925:gap-[33px]">
            <div className="w-[183px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearhome2-1.svg"
                  />
                </div>
                <a className="[text-decoration:none] flex-1 relative text-[inherit] mq700:text-lgi">
                  Overview
                </a>
              </div>
            </div>
            <nav className="m-0 flex-1 rounded-15xl bg-white-base box-border flex flex-row items-start justify-start py-1.5 px-3 gap-[11px] min-w-[474px] max-w-full whitespace-nowrap text-left text-lg text-gray-400 font-outfit border-[1px] border-solid border-base-blue mq450:flex-wrap mq450:min-w-full">
              <div className="h-10 w-[95px] box-border hidden border-b-[4px] border-solid border-base-blue" />
              <div className="flex-1 rounded-13xl bg-gray-300 box-border overflow-hidden flex flex-row items-start justify-start pt-3 px-3.5 pb-3.5 gap-[12px] min-w-[140px] max-w-full border-[1px] border-solid border-whitesmoke">
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/vuesaxlinearsearchnormal.svg"
                />
                <input
                  className="w-[124px] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-xs bg-[transparent] h-[15px] relative text-silver whitespace-pre-wrap text-left inline-block p-0"
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
                <button className="cursor-pointer py-[7px] pr-4 pl-[19px] bg-ntblack self-stretch rounded-11xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
                  <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[58px]">
                    Log Out
                  </a>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-base text-black">
          <div className="w-[953px] relative font-medium inline-block max-w-full">
            Activity Overview
          </div>
          <div className="self-stretch h-[155px] relative max-w-full text-sm text-typography-3 font-content-text-14-medium">
            <div className="absolute top-[0px] left-[250px] shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base w-[236px] flex flex-row items-start justify-start py-[9.5px] px-[18px] box-border gap-[28px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[22px] font-medium inline-block min-w-[87px]">
                  Total Volume
                </div>
                <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 whitespace-nowrap mq700:text-lgi mq700:leading-[32px]">
                  $75,620
                </div>
                <div className="relative leading-[22px] font-medium inline-block min-w-[46px]">
                  0.1ETH
                </div>
              </div>
              <div className="h-[69px] w-[54px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="self-stretch flex-1 relative rounded-[50%] bg-royalblue" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[15px] left-[15px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlineardollarcircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[500px] shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base w-[236px] flex flex-row items-start justify-start py-[20.5px] px-[18px] box-border gap-[28px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[22px] font-medium inline-block min-w-[92px]">
                  Won Biddings
                </div>
                <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 mq700:text-lgi mq700:leading-[32px]">
                  520
                </div>
              </div>
              <div className="h-[58px] w-[54px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="self-stretch flex-1 relative rounded-[50%] bg-lightseagreen" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[15px] left-[15px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearmedalstar.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[750px] shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base w-[236px] flex flex-row items-start justify-start py-[20.5px] px-[18px] box-border gap-[28px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[22px] font-medium inline-block min-w-[76px]">
                  My Auction
                </div>
                <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 mq700:text-lgi mq700:leading-[32px]">
                  32
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-[54px] h-[54px] relative"
                  alt=""
                  src="/group-1000002263.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[953px] flex flex-col items-start justify-start gap-[32px] max-w-full">
              <div className="w-[236px] shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base flex flex-row items-start justify-start py-[9.5px] px-[18px] box-border gap-[28px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="relative leading-[22px] font-medium inline-block min-w-[71px]">
                    Total Yield
                  </div>
                  <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 whitespace-nowrap mq700:text-lgi mq700:leading-[32px]">
                    $7,879
                  </div>
                  <div className="relative leading-[22px] font-medium inline-block min-w-[67px]">
                    0.005ETH
                  </div>
                </div>
                <div className="h-[69px] w-[54px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="self-stretch flex-1 relative rounded-[50%] bg-darkorange" />
                    <img
                      className="h-6 w-6 absolute !m-[0] top-[15px] left-[15px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearmoneyrecive.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base font-medium font-outfit text-black">
                Your Current bidd
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-lg bg-white-base flex flex-col items-start justify-start pt-4 pb-[34px] pr-[11px] pl-4 box-border gap-[19.8px] max-w-full text-sm text-gray-500 mq700:pt-5 mq700:pb-[22px] mq700:box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq925:flex-wrap">
            <div className="w-[107.2px] relative inline-block">Property</div>
            <div className="w-[107.2px] relative inline-block">Owner</div>
            <div className="w-[107.2px] relative inline-block">Value(eth)</div>
            <div className="w-[107.2px] relative inline-block">Your offer</div>
            <div className="relative inline-block min-w-[107.2px]">
              Your Bid Position
            </div>
            <div className="w-[107.2px] relative inline-block">End bidding</div>
          </div>
          <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-gray-600" />
          <div className="w-[945px] flex flex-col items-start justify-start gap-[24.8px] max-w-full text-base text-ntblack">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
              <div className="w-[269px] flex flex-row items-start justify-start gap-[42px] mq700:gap-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[119px]">
                    Lekki Court Yard
                  </div>
                  <div className="self-stretch relative text-sm text-gray-700">
                    Island , Lagos...
                  </div>
                </div>
                <div className="relative font-semibold inline-block min-w-[108px]">
                  Adrone Homes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[73px] max-w-full mq450:flex-wrap mq450:gap-[36px] mq700:gap-[18px]">
                <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <div className="relative font-semibold inline-block min-w-[66px]">
                    0.06ETH
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-seagreen">
                  <div className="flex flex-row items-center justify-center gap-[12px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[74px]">
                          0.062ETH
                        </div>
                      </div>
                    </div>
                    <input
                      className="cursor-pointer m-0 h-6 w-6 relative"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="w-[74px] relative font-semibold inline-block shrink-0">
                  1/10
                </div>
                <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[87px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                  <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[47px]">
                    End bid
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[928.5px] h-[0.5px] relative box-border max-w-full border-t-[0.5px] border-solid border-gray-600" />
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
              <div className="w-[269px] flex flex-row items-start justify-start gap-[42px] mq700:gap-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[119px]">
                    Lekki Court Yard
                  </div>
                  <div className="self-stretch relative text-sm text-gray-700">
                    Island , Lagos...
                  </div>
                </div>
                <div className="relative font-semibold inline-block min-w-[108px]">
                  Adrone Homes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[73px] max-w-full mq450:flex-wrap mq450:gap-[36px] mq700:gap-[18px]">
                <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <div className="relative font-semibold inline-block min-w-[66px]">
                    0.06ETH
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-crimson">
                  <div className="flex flex-row items-center justify-center gap-[12px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[74px]">
                          0.062ETH
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/vuesaxlineararrowup-1.svg"
                    />
                  </div>
                </div>
                <div className="w-[74px] relative font-semibold inline-block shrink-0">
                  2/10
                </div>
                <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[87px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                  <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[47px]">
                    End bid
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[928.5px] h-[0.5px] relative box-border max-w-full border-t-[0.5px] border-solid border-gray-600" />
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
              <div className="w-[269px] flex flex-row items-start justify-start gap-[42px] mq700:gap-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[119px]">
                    Lekki Court Yard
                  </div>
                  <div className="self-stretch relative text-sm text-gray-700">
                    Island , Lagos...
                  </div>
                </div>
                <div className="relative font-semibold inline-block min-w-[108px]">
                  Adrone Homes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[73px] max-w-full mq450:flex-wrap mq450:gap-[36px] mq700:gap-[18px]">
                <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <div className="relative font-semibold inline-block min-w-[66px]">
                    0.06ETH
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-seagreen">
                  <div className="flex flex-row items-center justify-center gap-[12px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[74px]">
                          0.062ETH
                        </div>
                      </div>
                    </div>
                    <input
                      className="cursor-pointer m-0 h-6 w-6 relative"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="w-[74px] relative font-semibold inline-block shrink-0">
                  1/10
                </div>
                <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[87px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                  <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[47px]">
                    End bid
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[928.5px] h-[0.5px] relative box-border max-w-full border-t-[0.5px] border-solid border-gray-600" />
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
              <div className="w-[269px] flex flex-row items-start justify-start gap-[42px] mq700:gap-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-semibold inline-block min-w-[119px]">
                    Lekki Court Yard
                  </div>
                  <div className="self-stretch relative text-sm text-gray-700">
                    Island , Lagos...
                  </div>
                </div>
                <div className="relative font-semibold inline-block min-w-[108px]">
                  Adrone Homes
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[73px] max-w-full mq450:flex-wrap mq450:gap-[36px] mq700:gap-[18px]">
                <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <div className="relative font-semibold inline-block min-w-[66px]">
                    0.06ETH
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-crimson">
                  <div className="flex flex-row items-center justify-center gap-[12px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[74px]">
                          0.062ETH
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/vuesaxlineararrowup-3.svg"
                    />
                  </div>
                </div>
                <div className="w-[74px] relative font-semibold inline-block shrink-0">
                  2/10
                </div>
                <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] w-[87px] rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
                  <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[47px]">
                    End bid
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityOverview;
