import { useEffect,useState } from "react";
import { useWeb3 } from "../utils/services/authContext";

export default function ConnectWalletButton() {
   const { address, loading, error, login, logout, initializeWeb3Auth } =
    useWeb3();
    useEffect(() => {
    initializeWeb3Auth();
  }, []);
   if (error) return <div>Error: {error.message}</div>;
  if (address) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-blue-600">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </span>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={login}
      disabled={loading}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
