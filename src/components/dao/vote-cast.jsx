"use client"

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/dao/ui/dialog";
import { Button } from "@/components/dao/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDAOContract } from "@/constants/contracts";
import { getProvider } from "@/constants/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import Loading from "@/components/shared/Loading";

export default function VoteCast({ proposalId }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const { walletProvider } = useWeb3ModalProvider();
  const readWriteProvider = getProvider(walletProvider);

  useEffect(() => {
    console.log("Selected option:", selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option === "yes" ? true : false);
  };  

  const handleVoteClick = () => {
    if (selectedOption !== null) {
      setShowDialog(true);
    }
  };

  const confirmVote = async () => {
    try {
      setLoading(true);
      const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;
      const daoContract = getDAOContract(signer);
      console.log(proposalId);
      console.log(selectedOption);

      const tx = await daoContract.voteOnProposal(proposalId, selectedOption);
      const receipt = await tx.wait();
      console.log(receipt);
      setLoading(false);
      setShowDialog(false);
      toast.success("Vote submitted successfully!");
    } catch (error) {
      setLoading(false);
      setShowDialog(false);
      toast.error("Error submitting vote: " + error.message);
    } finally {
      setLoading(false); 
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Cast Your Vote</h2>
      <div className="flex gap-4">
  <button
    className={`border-slate-800 border hover:border-2 hover:border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
      selectedOption === true ? "border-2 border-white" : ""
    }`}
    onClick={() => {
      handleOptionClick("yes");
    }}
  >
    Yes
  </button>
  <button
    className={`border-slate-800 border hover:border-2 hover:border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
      selectedOption === false ? "border border-2 border-white" : ""
    }`}
    onClick={() => {
      handleOptionClick("no");
    }}
  >
    No
  </button>
</div>

      <button
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
        onClick={confirmVote}
      >
        Vote
      </button>

      {showDialog && (
        <Dialog isOpen={showDialog} onDismiss={closeDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Vote</DialogTitle>
              <DialogDescription>Are you sure you want to cast this vote?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={confirmVote}>Confirm</Button>
              <Button onClick={closeDialog}>Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {loading && <Loading />}
      <ToastContainer />
    </div>
  );
}

export { VoteCast };