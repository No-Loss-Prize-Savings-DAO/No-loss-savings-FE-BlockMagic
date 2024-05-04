"use client"

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/dao/ui/dialog";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/dao/ui/button";
import { Input } from "@/components/dao/ui/input"
import { Label } from "@/components/dao/ui/label"
import { getDAOContract } from "@/constants/contracts";
import { getProvider } from "@/constants/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import Loading from "@/components/shared/Loading";

export default function NewProposalDialog() {


  const openDialog = () => {
    setIsDialogOpen(true);
  }

  const closeDialog = () => {
    setIsDialogOpen(false);

  }
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { walletProvider } = useWeb3ModalProvider();

  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const readWriteProvider = getProvider(walletProvider);

  const handleCreateProposal = async () => {

    try {
      setLoading(true);

      // Validate input
      if (!description.trim()) {
        console.error("Description is required.");
        toast.error("Description is required.");
        return; // Exit function if description is empty
      }

      if (isNaN(duration) || duration <= 0) {
        console.error("Duration must be a positive number.");
        toast.error("Duration field cannot be empty");
        return; // Exit function if duration is invalid
      }

      const proposalDuration = parseInt(duration); // Set proposal duration

      const signer = readWriteProvider
        ? await readWriteProvider.getSigner()
        : null;

      const daoContract = getDAOContract(signer);

      // Get the list of DAO addresses
      const daoAddresses = await daoContract.getDAOAddresses();

      // Check if user's address is in the list of DAO addresses
      const userAddress = await signer.getAddress();
      const isMember = daoAddresses.includes(userAddress);
      if (!isMember) {
        throw new Error("Only DAO members can propose activity.");
      }

      const tx = await daoContract.proposeActivity(description, proposalDuration);
      const receipt = await tx.wait();
      console.log(receipt);
      toast.success("Proposal created successfully!");
      setLoading(false);
    } catch (error) {
      toast.error("Error creating proposal: " + error.message);
      setLoading(false);
    } finally {
      setLoading(false); 
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    const days = parseInt(e.target.value);
    if (days < 1 || days > 7) {
      toast.info("Duration must be between 1 - 7")
    }

  const seconds = days * 86400;

  setDuration(seconds);
  console.log(seconds);
  };  


  return (
    <Dialog isOpen={isDialogOpen} onDismiss={closeDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full" onClick={openDialog}>Create new proposal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] sm:min-h-[400px]">
        <DialogHeader>
          <DialogTitle>Create a new proposal</DialogTitle>
          <DialogDescription>
            Fill in the proposal details. Click create when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="desc"
              defaultValue=""
              className="col-span-3"
              onChangeCapture={handleDescriptionChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Duration (1-7 days)
            </Label>
            <Input
              id="duration"
              type="number"
              min={1}
              max={7}
              defaultValue=""
              className="col-span-3"
              onChangeCapture={handleDurationChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateProposal}>Create</Button>
          {loading && <Loading />}
        </DialogFooter>
      </DialogContent>

      <ToastContainer />
    </Dialog>


  )

}
