import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import {chain} from '../utils/config/chain'
import {
  CHAIN_NAMESPACES,
  IAdapter,
  IProvider,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { getInjectedAdapters } from "@web3auth/default-evm-adapter";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
const Web3AuthComponent = () => {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const clientId=
            "BBVDMwlxxq-Ytcwx1Za2MJCbPlbXVakgB00Ik1imJykY_Fw-nQJqdmG0c4nogr7q19hurPJ48m2sw1mYbqdLhoY"; // get this from Web3Auth Dashboard
        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: {
            chainConfig: chain.base,
          },
        });
        const web3AuthOptions = {
          chainConfig: chain.base,
          clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider,
        };
        const web3auth = new Web3Auth(web3AuthOptions);

        // const openloginAdapter = new OpenloginAdapter({
        //   privateKeyProvider,
        // });
      const adapters = await getInjectedAdapters({ options: web3AuthOptions });

       adapters.forEach((adapter) => {
         web3auth.configureAdapter(adapter);
       });
        await web3auth.initModal();
        setWeb3auth(web3auth);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("Web3Auth not initialized");
      return;
    }
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);

      if (web3authProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          web3authProvider
        );
        const signer = ethersProvider.getSigner();
        const address = await signer.getAddress();
        const balance = await ethersProvider.getBalance(address);

        setAddress(address);
        setBalance(ethers.utils.formatEther(balance));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("Web3Auth not initialized");
      return;
    }
    try {
      await web3auth.logout();
      setProvider(null);
      setAddress("");
      setBalance("");
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("Web3Auth not initialized");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  return (
    <div>
      {!address ? (
        <button onClick={login}>Login with Email</button>
      ) : (
        <div>
          <p>Address: {address}</p>
          <p>Balance: {balance} ETH</p>
          <button onClick={getUserInfo}>Get User Info</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Web3AuthComponent;
