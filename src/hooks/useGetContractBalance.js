"use client";

import { getProvider, readOnlyProvider } from "@/constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { getSavingsContract, getUSDTContract, getBLZContract  } from "@/constants/contracts";
import { ethers } from "ethers";

const contractAddress = process.env.NEXT_PUBLIC_SAVINGS_CONTRACT; 

export function useGetContractBalance() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [contractBalance, setContractBalance] = useState();

  const readWriteProvider = getProvider(walletProvider);

  const fetchContractBalance = async () => {
    try {
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getSavingsContract(signer);
      contract
        .getContractBalance()
        .then((res) => {
          const converted = {
            stableCoinBalance: res.stableCoinBalance,
            contractTokenBalance: res.contractTokenBalance,
          };

          setContractBalance(converted);
        })
        .catch((err) => {
          console.error("error fetching proposals: ", err);
          setContractBalance((prev) => ({ ...prev, loading: false }));
        });
    } catch (error) {}
  };

  useEffect(() => {
    const getContractBalance = async () => {
      const filter = {
        address: process.env.NEXT_PUBLIC_MOCK_USDT_CONTRACT,
        topics: [
          ethers.id("StableCoinDeposited(address,uint256)"),
          ethers.id("StableCoinWithdrawn(address,uint256)"),
        ],
        // topics: [ethers.id("StableCoinWithdrawn(address,uint256)")],
      };
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getSavingsContract(signer);

      try {
        const events = await readOnlyProvider
          .getLogs({
            ...filter,
            // fromBlock: 5726200,
          })
          .then((events) => {
            fetchContractBalance();
          });
      } catch (error) {
        console.error("Error fetching logs: ", error);
      }

      contract.on("StableCoinWithdrawn", fetchContractBalance);

      // Cleanup function
      return () => contract.off("StableCoinWithdrawn", fetchContractBalance);
    };

    getContractBalance();
  }, [address]);

  return contractBalance;
}

export const getContractTokenBalances = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [contractUsdtBalance, setContractUsdtBalance] = useState(0);
  const [contractBlzBalance, setContractBlzBalance] = useState(0);

  const readWriteProvider = getProvider(walletProvider);

  async function fetchUserTokenBalances() {
    const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;
    const usdtContract = getUSDTContract(signer);
    const blzContract = getBLZContract(signer);

 usdtContract.balanceOf(contractAddress).then((res)=>{
  // console.log(res);
  setContractUsdtBalance(res);
 });

 blzContract.balanceOf(contractAddress).then((res)=>{
  // console.log(res);
  setContractBlzBalance(res);
 });
    // const blzBalance =  blzContract.balanceOf(address);
    // console.log(usdtBalance);

    // setUserUsdtBalance(usdtContract.balanceOf(address));
    // setUserBlzBalance(blzBalance);

  }

  fetchUserTokenBalances();

  return {contractUsdtBalance, contractBlzBalance};
};