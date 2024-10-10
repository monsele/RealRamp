// src/components/Web3AuthComponent.tsx
import { useEffect } from "react";
import { useWeb3 } from "../utils/services/authContext";
import  ContractInteraction  from "../components/ContractComponent";
const Web3AuthComponent = () => {
  const { address, loading, error, login, logout, initializeWeb3Auth } =
    useWeb3();

  useEffect(() => {
    initializeWeb3Auth();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {!address ? (
        <button onClick={login}>Login with Email</button>
      ) : (
        <div>
          <p>Address: {address}</p>
          <ContractInteraction/>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Web3AuthComponent;
