"use client";

import React from "react";
import { Button } from "../ui/button";
import { getRegulatoryComplianceContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "@/constants/providers";
import { toast } from "react-toastify";



const AcceptDaoMembership = ({closeModal}) => {
  const { walletProvider } = useWeb3ModalProvider();

  const readWriteProvider = getProvider(walletProvider);

   async function handleAcceptDaoMembership(){
    console.log("Working");
    try {
      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;
      const contract = getRegulatoryComplianceContract(signer);
      const acceptMembership = await contract.acceptAgreement();
      const tx = await acceptMembership.wait();
      console.log("Transaction: ", tx);
      if (tx.status === 1 && onSubmit) {
        closeModal();
        toast.info("Your request has been accepted and is being processed");
      }
      

    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };

  return (
    <>
      <Button
        type="submit"
        variant={"outline"}
        className="bg-[#0267FF] text-white rounded-xl"
        onClick={()=>{
            handleAcceptDaoMembership()
        }}
      >
        Accept
      </Button>
    </>
  );
};

export default AcceptDaoMembership;
