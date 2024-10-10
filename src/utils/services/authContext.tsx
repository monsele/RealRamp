// src/context/Web3Context.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { Web3Auth } from "@web3auth/modal";
import {
  CHAIN_NAMESPACES,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { getInjectedAdapters } from "@web3auth/default-evm-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { 
  createPublicClient, 
  createWalletClient, 
  custom, 
  type PublicClient, 
  type WalletClient,
  type Chain
} from 'viem';
import { base } from 'viem/chains';
import { chain } from '../config/chain';
import { IWeb3Context, Web3ProviderProps } from '../interfaces/interfaces';

const Web3Context = createContext<IWeb3Context | undefined>(undefined);

export function Web3Provider({ children }: { children: ReactNode }) {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const setupViem = async (provider: any) => {
    try {
      const publicClient = createPublicClient({
        transport: custom(provider),
        chain: base
      }) as PublicClient;

      const walletClient = createWalletClient({
        transport: custom(provider),
        chain: base
      });

      const [address] = await walletClient.getAddresses();

      setPublicClient(publicClient);
      setWalletClient(walletClient);
      setAddress(address);
    } catch (error) {
      console.error("Error setting up Viem:", error);
      setError(error instanceof Error ? error : new Error('Unknown error during Viem setup'));
    }
  };

  const initializeWeb3Auth = async (): Promise<void> => {
    try {
      const clientId = "BBVDMwlxxq-Ytcwx1Za2MJCbPlbXVakgB00Ik1imJykY_Fw-nQJqdmG0c4nogr7q19hurPJ48m2sw1mYbqdLhoY";
      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig: chain.base },
      });

      const web3AuthOptions = {
        chainConfig: chain.base,
        clientId,
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
        privateKeyProvider,
      };

      const web3authInstance = new Web3Auth(web3AuthOptions);
      const adapters = await getInjectedAdapters({ options: web3AuthOptions });
      
      adapters.forEach((adapter) => {
        web3authInstance.configureAdapter(adapter);
      });

      await web3authInstance.initModal();
      console.log("Got initailized")
      setWeb3auth(web3authInstance);

      if (web3authInstance.provider) {
        console.log("Got Viem");
        await setupViem(web3authInstance.provider);
      }
    } catch (error) {
      console.error("Error initializing Web3Auth:", error);
      setError(error instanceof Error ? error : new Error('Unknown error during initialization'));
    } finally {
      setLoading(false);
    }
  };

  const login = async (): Promise<void> => {
    if (!web3auth) {
      throw new Error("Web3Auth not initialized");
    }
    try {
      const web3authProvider = await web3auth.connect();
      await setupViem(web3authProvider);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    if (!web3auth) {
      throw new Error("Web3Auth not initialized");
    }
    try {
      await web3auth.logout();
      setPublicClient(null);
      setWalletClient(null);
      setAddress("");
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  const value: IWeb3Context = {
    web3auth,
    publicClient,
    walletClient,
    address,
    loading,
    error,
    login,
    logout,
    initializeWeb3Auth
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export function useWeb3(): IWeb3Context {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
}