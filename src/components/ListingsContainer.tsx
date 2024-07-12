import { FunctionComponent } from "react";
import FrameComponent from "./ExploreCard";

export type ListingsContainerType = {
  className?: string;
};

const ListingsContainer: FunctionComponent<ListingsContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1108px] flex flex-row flex-wrap items-start justify-start gap-[57px_18.7px] min-h-[733px] max-w-full text-left text-base text-ntblack font-outfit ${className}`}
    >
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
      <FrameComponent />
    </section>
  );
};

export default ListingsContainer;
