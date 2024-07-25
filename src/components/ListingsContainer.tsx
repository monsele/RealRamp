import { FunctionComponent, useEffect, useState } from "react";
import ExploreCard from "./ExploreCard";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { PropertyType } from "../utils/interfaces/interfaces";
export type ListingsContainerType = {
  className?: string;
};

const ListingsContainer: FunctionComponent<ListingsContainerType> = ({
  className = "",
}) => {
  //const {queryKey} = useReadContract();
  const { data } = useQuery({
    queryKey: ["getProperties"],
    queryFn: async () => {
      const { data } = await axios.get(`https://localhost:7280/properties`);
      return data as PropertyType[];
    },
  });
  
 console.log(data);
//  const result = useReadContract({
//    abi: contractABI,
//    address: contractAddress,
//    functionName: "GetListedTokens",
//    args: [],
//  });
  // useEffect(() => {
  //   setfirst(result);
  // }, [])
  //  console.log(result.data);
  return (
    <section
      className={`w-[1108px] flex flex-row flex-wrap items-start justify-start gap-[57px_18.7px] min-h-[733px] max-w-full text-left text-base text-ntblack font-outfit ${className}`}
    >
      {data?.map((item, index) => (
        <ExploreCard
          key={index}
          propertyTitle={item.propertyTitle}
          plots="100"
          price={item.price}
          propertyLocation={item.propertyLocation}
          smartContractId={item.smartContractId}
        />
      ))}
    </section>
  );
};

export default ListingsContainer;
