"use client";

import { getProvider, readOnlyProvider } from "@/constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getSavingsContract, getUSDTContract, getBLZContract } from "@/constants/contracts";


export function useGetUserBalance() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [userBalance, setUserBalance] = useState();

  const readWriteProvider = getProvider(walletProvider);

  const fetchUserBalance = async () => {
    try {
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getSavingsContract(signer);
      contract
        .getUserBalance(address)
        .then((res) => {
          const converted = {
            stableCoinBalance: res.stableCoinBalance,
            contractTokenBalance: res.contractTokenBalance,
          };

          setUserBalance(converted);
        })
        .catch((err) => {
          console.error("error fetching proposals: ", err);
          setUserBalance((prev) => ({ ...prev, loading: false }));
        });
    } catch (error) {}
  };

  useEffect(() => {
    const getUserBalance = async () => {
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
            fetchUserBalance();
          });
      } catch (error) {
        console.error("Error fetching logs: ", error);
      }

      contract.on("StableCoinWithdrawn", fetchUserBalance);
      contract.on("StableCoinDeposited", fetchUserBalance);

      // Cleanup function
      return () => {
        contract.off("StableCoinWithdrawn", fetchUserBalance);
        contract.off("StableCoinDeposited", fetchUserBalance);
      };
    };

    getUserBalance();
  }, [address]);

  return userBalance;
}

export const getUserDAOStatus = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [userDaoStatus, setUserDaoStatus] = useState();

  const readWriteProvider = getProvider(walletProvider);

  async function fetchUserStatus() {
    const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;
    const contract = getSavingsContract(signer);
    contract.isDAO(address).then((res) => {
      // console.log(res);
      setUserDaoStatus(res)
    });
  }

  fetchUserStatus();

  return userDaoStatus;
};


export const getUserTokenBalances = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [userUsdtBalance, setUserUsdtBalance] = useState(0);
  const [userBlzBalance, setUserBlzBalance] = useState(0);

  const readWriteProvider = getProvider(walletProvider);

  async function fetchUserTokenBalances() {
    const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;
    const usdtContract = getUSDTContract(signer);
    const blzContract = getBLZContract(signer);

 usdtContract.balanceOf(address).then((res)=>{
  // console.log(res);
  setUserUsdtBalance(res);
 });

 blzContract.balanceOf(address).then((res)=>{
  // console.log(res);
  setUserBlzBalance(res);
 });
    // const blzBalance =  blzContract.balanceOf(address);
    // console.log(usdtBalance);

    // setUserUsdtBalance(usdtContract.balanceOf(address));
    // setUserBlzBalance(blzBalance);

  }

  fetchUserTokenBalances();

  return {userUsdtBalance, userBlzBalance};
};