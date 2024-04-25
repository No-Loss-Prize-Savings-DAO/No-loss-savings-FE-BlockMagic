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
import { Button } from "@/components/dao/ui/button";
import { Input } from "@/components/dao/ui/input"
import { Label } from "@/components/dao/ui/label"

export default function NewProposalDialog({ onCreateProposal }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  }

  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  const handleCreateProposal = () => {
    // Logic for creating a new proposal
    // onCreateProposal();
    console.log("Creating new proposal...");
    closeDialog();
  }

  // return (
    // <>
    //   <Dialog isOpen={isDialogOpen} onDismiss={closeDialog}>
    //     <DialogContent>
    //       <DialogHeader>
    //         <DialogTitle>Are you absolutely sure?</DialogTitle>
    //         <DialogDescription>
    //           This action cannot be undone. This will permanently delete your account
    //           and remove your data from our servers.
    //         </DialogDescription>
    //       </DialogHeader>
    //       <div className="flex justify-end">
    //         <Button variant="outline" onClick={closeDialog}>Cancel</Button>
    //         <Button onClick={handleCreateProposal}>Confirm</Button>
    //       </div>
    //     </DialogContent>

    //     <DialogTrigger>
    //     <Button variant="outline" className="rounded-full" onClick={openDialog}>Create new proposal</Button>
    //   </DialogTrigger>
    //   </Dialog>

      return (
        <Dialog isOpen={isDialogOpen} onDismiss={closeDialog}>
          <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full" onClick={openDialog}>Create new proposal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new proposal</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description (optional)
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateProposal}>Create</Button>
        </DialogFooter>
      </DialogContent>

  
    </Dialog>
  )
  
}
