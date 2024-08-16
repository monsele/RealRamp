import { FunctionComponent } from "react";
import FrameComponent from "../components/AuctionNavbar";
import PropertyInfoContainer from "../components/PropertyInfoContainer";
import { useParams } from "react-router-dom";

const AuctionScreen: FunctionComponent = () => {
  const { tokenId, name } = useParams();

  return (
    <div className="w-full h-[1024px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[149px] pb-[165px] box-border gap-[649px] leading-[normal] tracking-[normal] text-left text-sm text-white-base font-outfit mq450:gap-[162px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[324px] mq750:pl-[74px] mq750:pr-[74px] mq750:box-border mq1225:h-auto">
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-[30px] box-border max-w-full shrink-0">
        <section className="flex-1 flex flex-col items-start justify-start gap-[30px] shrink-0 max-w-full">
          {/* <FrameComponent /> */}
          <PropertyInfoContainer tokenId={tokenId} nameOfAsset={name} />
        </section>
      </main>
      {/* <div className="w-[106px] h-9 relative [backdrop-filter:blur(4px)] rounded-[37px] bg-gray-1300 hidden whitespace-nowrap">
        <img
          className="absolute top-[6px] left-[10px] w-6 h-6"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className="absolute top-[9px] left-[46px] font-medium inline-block min-w-[50px]">
          200 likes
        </div>
      </div> */}
      <img
        className="w-[35px] h-[35px] relative shrink-0"
        alt=""
        src="/group-1000002260.svg"
      />
    </div>
  );
};

export default AuctionScreen;
