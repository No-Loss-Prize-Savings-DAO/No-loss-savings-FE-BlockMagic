"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const OPTIMISM_SEPOLIA_ID = 11155420;
export const SEPOLIA_ID = 11155111;

export const OPTIMISM_ID = 10;

const OP_mainnet = {
  chainId: OPTIMISM_ID,
  name: "Optimism",
  currency: "ETH",
  explorerUrl: "https://explorer.optimism.io",
  rpcUrl: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
};

const OP_sepolia = {
  chainId: OPTIMISM_SEPOLIA_ID,
  name: "Optimism Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-optimistic.etherscan.io",
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_OP_RPC_URL
};

const Sepolia = {
  chainId: SEPOLIA_ID,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
};



const metadata = {
  name: "Badger for Shardeum",
  description: "No code token creation",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [OP_mainnet, OP_sepolia, Sepolia],
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
