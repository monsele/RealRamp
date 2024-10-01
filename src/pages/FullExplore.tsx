import { FunctionComponent } from "react";
import NavBar from "../components/navbar";
import ListingsContainer from "../components/ListingsContainer";

const FullExplore: FunctionComponent = () => {
  return (
    <div className="w-full bg-gray-100">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-[106px]">
        <main className="flex flex-row items-start justify-end py-0 box-border max-w-full">
          <ListingsContainer />
        </main>
      </div>
    </div>
  );
};

export default FullExplore;
