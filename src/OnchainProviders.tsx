import { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

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
  projectId: "626fe63a-376e-4e52-bf81-52f34f6fc403",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}
        >
          <RainbowKitProvider modalSize="compact">
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
