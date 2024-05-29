"use client";

import React from "react";
import { Button } from "../ui/button";
import { getRegulatoryComplianceContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "@/constants/providers";
import { toast } from "react-toastify";



const RejectDaoMembership = ({closeModal}) => {
  const { walletProvider } = useWeb3ModalProvider();

  const readWriteProvider = getProvider(walletProvider);

   async function handleRejctDaoMembership(){
    console.log("Working");
    try {
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getRegulatoryComplianceContract(signer);
      const rejectMembership = await contract.rejectAgreement();
      const tx = await rejectMembership.wait();
      console.log("Transaction: ", tx);
      if (tx.status === 1 && onSubmit) {
        closeModal();
        toast("You have rejected the DAO membership");
      }
      

    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };

  return (
    <>
      <Button
        type="submit"
        variant={"destructive"}
        className="bg-red-600 text-white rounded-xl"
        onClick={()=>{
            handleRejctDaoMembership()
        }}
      >
        Reject
      </Button>
    </>
  );
};

export default RejectDaoMembership;
