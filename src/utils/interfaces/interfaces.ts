 import { Web3Auth } from "@web3auth/modal";
import { PublicClient, WalletClient } from "viem";
 export interface PropertyType {
    id: number;
    propertyTitle: string;
    propertyLocation: string;
    propertyCategory: string;
    annualYield: number;
    units: number;
    price: number;
    propertyDescription: string;
    propertyOwner: string;
    images: string;
    smartContractId: number;
  }
  export interface UserTokenData {
  tokenId: bigint;
  name: string;
  description: string;
  amountOwned: bigint;
}

export interface Auction {
  id: number;
  nameOfAsset: string;
  tokenId: number;
  initialBid: string;
  owner: string;
  completed: boolean;
  tokenAmount: string;
  smartContractId: number;
}
export interface IWeb3Context {
  web3auth: Web3Auth | null;
  publicClient: PublicClient | null;
  walletClient: WalletClient | null;
  address: string;
  loading: boolean;
  error: Error | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  initializeWeb3Auth: () => Promise<void>;
}

export interface Web3ProviderProps {
  children: React.ReactNode;
}