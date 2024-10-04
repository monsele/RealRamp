import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import React, { useEffect } from "react";
import NotConnectedPage from "../components/NotConnectedPage";

import SourceCode from "../components/SourceCode";

function HomePage() {
  const { isConnected,web3Auth,connect } = useWeb3Auth();
useEffect(() => {
  const init = async () => {
    try {
      await web3Auth?.initModal();
      if (isConnected) {
        console.log("Connected")
      }
    } catch (error) {
      console.error(error);
    }
  };
  init();
}, [])

  return (
    <main className="flex flex-col h-screen z-0">
     
      <div className="flex flex-1 overflow-hidden">
        {isConnected ? (
            <div className=" w-full h-full flex flex-1 flex-col bg-gray-50 items-center justify-flex-start overflow-scroll">
              <h1 className="w-11/12 px-4 pt-16 sm:px-6 lg:px-8 text-2xl font-bold text-center sm:text-3xl">
                Welcome to Web3Auth PnP Modal SDK Playground
              </h1>
              <SourceCode />
            </div>
         
        ) : (
          <button onClick={connect}>
            Not connected
          </button>
        )}
      </div>
    </main>
  );
}

export default HomePage;
