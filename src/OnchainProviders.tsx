import { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { baseSepolia,sepolia } from "viem/chains";
import { WagmiProvider,http } from "wagmi";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  Web3AuthInnerContext,
  Web3AuthProvider,
} from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import web3AuthContextConfig from "./utils/services/web3authContext";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

const wallets = [
  {
    groupName: "Recommended Wallet",
    wallets: [coinbaseWallet],
  },
  {
    groupName: "Other Wallets",
    wallets: [rainbowWallet, metaMaskWallet],
  },
];

const wagmiConfig = getDefaultConfig({
  appName: "onchainkit",
  wallets,
  projectId: "1b8a76a4b6f972f3465c27dc3bb483cd",
  chains: [baseSepolia],
  ssr: false,
  syncConnectedChain: true,
  transports: {
    [baseSepolia.id]: http(
      `https://base-sepolia.g.alchemy.com/v2/Kg-QkKBYxywIbXW70OhuxDpOde_Z-YlI`
    ),
  },
  // If your dApp uses server side rendering (SSR)
});

function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Web3AuthProvider config={web3AuthContextConfig}>
          <WalletServicesProvider context={Web3AuthInnerContext}>
            <OnchainKitProvider
              apiKey={process.env.PUBLIC_ONCHAINKIT_API_KEY}
              chain={baseSepolia}
            >
              <RainbowKitProvider modalSize="compact">
                {children}
              </RainbowKitProvider>
            </OnchainKitProvider>
          </WalletServicesProvider>
        </Web3AuthProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;


