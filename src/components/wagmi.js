import { http, createConfig } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
 
export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({
      appName: 'Packets',
      preference: 'all',
      version: '4',
    }),
  ],
  //autoconnect:true,
  ssr: true,
  
  transports: {
    [baseSepolia.id]: http(),
  },
});