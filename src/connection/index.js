"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const creatorAddress = "0xDdb342ecc94236c29a5307d3757d0724D759453C"
export const SUPPORTED_CHAIN = 4202;

export const SEPOLIA_ID = 4202;



const LiskSepolia = {
  chainId: SEPOLIA_ID,
  name: "Lisk sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-blockscout.lisk.com",
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
};

const metadata = {
  name: "Blitz",
  description: "No loss savings",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [LiskSepolia],
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
