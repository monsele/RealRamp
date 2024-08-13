import { FunctionComponent, useEffect, useState } from "react";
import ExploreCard from "./ExploreCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Auction } from "../utils/interfaces/interfaces";
import AuctionInfoCard from "./AuctionInfoCard";
export type AuctionsContainerType = {
  className?: string;
};

const AuctionsContainer: FunctionComponent<AuctionsContainerType> = ({
  className = "",
}) => {
  //const {queryKey} = useReadContract();
  const { data } = useQuery({
    queryKey: ["getAuctions"],
    queryFn: async () => {
      const { data } = await axios.get(`https://on-real.fly.dev/auction`);
      return data as Auction[];
    },
  });

  console.log(data);
  return (
    <section
      className={`w-[1108px] flex flex-row flex-wrap items-start justify-start gap-[57px_18.7px] min-h-[733px] max-w-full text-left text-base text-ntblack font-outfit ${className}`}
    >
      {data?.map((item, index) => (
        <AuctionInfoCard
          key={index}
          propertyTitle={item.nameOfAsset}
          plots={item.tokenAmount}
          price={Number(item.initialBid)}
          propertyLocation={item.owner}
          smartContractId={item.tokenId}
          auctionId={item.id.toString()}
        />
      ))}
    </section>
  );
};

export default AuctionsContainer;
