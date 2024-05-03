"use client";

import React from "react";
import { Button } from "../ui/button";
import { getRegulatoryComplianceContract } from "@/constants/contracts";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "@/constants/providers";

const AcceptDaoMembership = () => {
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
      const tx = acceptMembership.wait();
      console.log("Transaction: ", tx);
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
