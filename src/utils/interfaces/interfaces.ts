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