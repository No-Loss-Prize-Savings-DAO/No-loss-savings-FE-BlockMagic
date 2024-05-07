"use client";
import { useState } from "react";

import { Button } from "../../../components/ui/button";
import usdt from "../../../../public/images/token-swap/tether.svg";
import Image from "next/image";
import { getProvider } from "@/constants/providers";
import { getSavingsContract, getUSDTContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";

import { toast } from 'react-toastify';
import Loading from "@/components/shared/Loading";

export default function Deposit() {
  const { walletProvider } = useWeb3ModalProvider();
  const [depositAmount, setDepositAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  

  const readWriteProvider = getProvider(walletProvider);
  const deposit = async () => {
    const signer = readWriteProvider
    ? await readWriteProvider.getSigner()
    : null;
  const usdtcontract = getUSDTContract(signer);
  const contract = getSavingsContract(signer);
    try {
      setLoading(true);

      const amount = Number(depositAmount * 1e6);
      const approve = await usdtcontract.approve(
        process.env.NEXT_PUBLIC_SAVINGS_CONTRACT,
        amount,
      );
      const approval = await approve.wait();

      console.log(approval);
      if (approval.status === 1) {
        const transferFrom = await contract.deposit(amount);
        const receipt = await transferFrom.wait();

        setDepositAmount(0);
        console.log(receipt);
      } else {
        console.log("Approval Failed");
      }
    } catch (error) {
      setLoading(false);
      // const decodedError = contract.interface.parseError(error.data);/
      console.log("Error handling deposit:", error.message);
      toast.error(`Error handling deposit: ${error.message}`);
      throw error;
      
    } finally{
      setLoading(false);
    }
  };

  const people = [{ name: "USDT", icon: usdt }];
  return (
    <div className="mb-0 rounded-xl" id="deposit">
      {/* <h3 className="font-bold text-2xl">Deposit</h3>/ */}

      <label className="block p-4 px-0 pb-1 font-semibold">
        Deposit Token:
      </label>
      <div className="border flex justify-between items-center bg-transparent w-full border-slate-700 rounded-2xl py-1 px-2 pl-3 outline-none transition-all duration-300 focus:border-blue-500">
        <input
          type="number"
          placeholder="Amount..."
          className="bg-transparent w-[80%] invisibile h-[full] outline-none"
          onChange={(e) => {
            setDepositAmount(e.target.value);
          }}
          value={depositAmount}
        />{" "}
        <div className="relative w-10 p-2 cursor-pointer text-left shadow-md focus:outline-none border border-grey-500 rounded-2xl sm:text-sm">
          <Image
            src={usdt}
            alt="usdt"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* <p className="p-4 px-0 font-extralight">Total balance: 00000000</p> */}

      <Button
        variant={"outline"}
        className="py-3 px-6 mt-4 gap-2 rounded-2xl border bg-[#0267FF] text-white text-sm w-fit"
        translate="no"
        onClick={deposit}
        disabled={loading}
      >
        Deposit
      </Button>
      {loading && <Loading />}
    </div>
  );
}
