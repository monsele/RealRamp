// src/components/ContractInteraction.tsx
import { useWeb3 } from "../utils/services/authContext";
import { getAddress, isAddress, parseAbi, type Address } from "viem";
import {contractABI,contractAddress} from '../abi/EstatePool'

interface ContractCallError {
  message: string;
  code?: string;
}

const ContractInteraction = () => {
  const { publicClient, walletClient, address } = useWeb3();

  // Example contract details
  const estatePoolAddress = getAddress(contractAddress);
  const abi = contractABI;

  const readContract = async (): Promise<void> => {
    if (!publicClient || !address) return;

    try {
        const checksummedAddress = getAddress(
          "0x133bc7a7ea1e1a5b03d67c1fe09039c9520d5104"
        );
        if (!isAddress(checksummedAddress)) {
          throw new Error("Invalid address");
        }

      const balance = await publicClient.readContract({
        address: estatePoolAddress,
        abi,
        functionName: "balanceOf",
        args: [checksummedAddress, BigInt(1)],
      });
      console.log("Balance:", balance);
    } catch (error) {
      const contractError = error as ContractCallError;
      console.error("Error reading contract:", contractError.message);
    }
  };

//   const writeContract = async (): Promise<void> => {
//     if (!walletClient || !address || !publicClient) return;

//     try {
//       const { request } = await publicClient.simulateContract({
//         account: address as Address,
//         address: contractAddress,
//         abi,
//         functionName: "mint",
//         args: ["0xRecipientAddress" as Address, 100n],
//       });

//       const hash = await walletClient.writeContract(request);
//       console.log("Transaction hash:", hash);
//     } catch (error) {
//       const contractError = error as ContractCallError;
//       console.error("Error writing to contract:", contractError.message);
//     }
//   };

  return (
    <div>
      <button onClick={readContract}>Read Contract</button>
      {/* <button onClick={writeContract}>Write Contract</button> */}
    </div>
  );
};

export default ContractInteraction;
