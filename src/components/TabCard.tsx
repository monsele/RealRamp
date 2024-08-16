import { FunctionComponent } from "react";

export type TabCardType = {
  className?: string;
  totalYield?: string;
  yieldSeparators?: string;
  eTH?: string;
  vuesaxlinearmoneyRecive?: string;
};

const TabCard: FunctionComponent<TabCardType> = ({
  className = "",
  totalYield,
  yieldSeparators,
  eTH,
  vuesaxlinearmoneyRecive,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_8px_29px_rgba(51,_38,_174,_0.03)] rounded-md bg-white-base flex flex-row items-start justify-start py-[9.5px] px-[18px] box-border gap-[28px] min-w-[189px] max-w-[236px] text-left text-sm text-typography-3 font-title-price ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="relative leading-[22px] font-medium inline-block min-w-[68px]">
          {totalYield}
        </div>
        <div className="self-stretch relative text-5xl leading-[40px] font-semibold text-typography-1 whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
          {yieldSeparators}
        </div>
        <div className="relative leading-[22px] font-medium inline-block min-w-[67px]">
          {eTH}
        </div>
      </div>
      <div className="h-[69px] w-[54px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[10px]">
          <div className="self-stretch flex-1 relative rounded-[50%] bg-darkorange" />
          <img
            className="h-6 w-6 absolute !m-[0] top-[15px] left-[15px] z-[1]"
            loading="lazy"
            alt=""
            src={vuesaxlinearmoneyRecive}
          />
        </div>
      </div>
    </div>
  );
};

export default TabCard;
