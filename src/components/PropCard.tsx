import { FunctionComponent } from "react";

export type PropCardType = {
  className?: string;
  title: string;
  LocationAddress: string;
  Price?: string;
  Yield?: string;
  Action?: string;

};
const PropCard: FunctionComponent<PropCardType> = ({
  className = "",
  title,
  Yield,
  LocationAddress,
  Price,
  Action,
}) => {
  return (
    <div
      className={`shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base flex flex-col items-start justify-start gap-[16px] text-left text-base text-ntblack font-outfit ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[149px] pb-[21px] pr-[41px] pl-[42px] relative gap-[10px] mq450:pl-5 mq450:box-border">
        <img
          className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center z-[1]">
          <div className="flex flex-row items-center justify-center gap-[3px]">
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-600" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-600" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white-base" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-600" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-600" />
            <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gray-600" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[18px] gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold">{title}</div>
          <div className="self-stretch relative text-sm text-gray-700">
            {LocationAddress}
          </div>
        </div>
        <div className="self-stretch h-5 flex flex-row items-start justify-start gap-[19.8px]">
          <div className="flex-1 relative font-medium">{Price}</div>
          <div className="h-[20.5px] w-[0.5px] relative box-border border-r-[0.5px] border-solid border-gray-800" />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm">
            <div className="self-stretch relative font-medium">
              {Yield} Annual yield
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-white-base self-stretch rounded-t-none rounded-b-3xs flex flex-row items-start justify-start">
        <div className="flex-1 rounded-t-none rounded-b-3xs bg-white-base flex flex-row items-start justify-center py-[15px] px-5 gap-[8px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-base font-semibold font-outfit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[26px]">{`${
              Action == "" ? "View Detail" : Action
            } `}</div>
          </div>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/frame-1000003226vuesaxlinearproperty-34.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default PropCard;
