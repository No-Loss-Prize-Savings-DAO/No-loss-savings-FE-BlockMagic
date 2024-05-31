import { getSavingsContract } from "@/constants/contracts";
import { getProvider } from "@/constants/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

function ForfeitMembership() {
  const { walletProvider } = useWeb3ModalProvider();
  const [loading, setLoading] = useState(false);

  const readWriteProvider = getProvider(walletProvider);
  const forfeit = async () => {
    const signer = readWriteProvider
      ? await readWriteProvider.getSigner()
      : null;

    try {
      const contract = getSavingsContract(signer);
      const forfeitReceipt = await contract.proposalCount();
      console.log(forfeitReceipt);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-fit">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="destructive"
            className="mx-auto bg-red-600 rounded-xl"
          >
            Forfeit membership
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Fordeit DAO membership</DialogTitle>
            <DialogDescription>
              Are you sure you want to forfeit your DAO membership?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            <Button type="submit">Cancel</Button>
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                forfeit();
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ForfeitMembership;
