"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const creatorAddress = "0xDdb342ecc94236c29a5307d3757d0724D759453C"
export const SUPPORTED_CHAIN = 80002;

export const AMOY_ID = 80002;

const Amoy = {
  chainId: AMOY_ID,
  name: "Polygon Amoy",
  currency: "MATIC",
  explorerUrl: "https://www.oklink.com/amoy",
  rpcUrl: process.env.NEXT_PUBLIC_AMOY_RPC_URL,
};

const metadata = {
  name: "Blitz",
  description: "No loss savings",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [Amoy],
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  enableAnalytics: false, // Optional - defaults
  themeVariables: {
    "--w3m-accent": "#006AFF",
    "--w3m-border-radius-master": "",
    "--w3m-font-size-master": "16",
  },
});

export function Web3Modal({ children }) {
  return children;
}
