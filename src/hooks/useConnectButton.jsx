"use client";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";
import UserDetails from "@/components/shared/userDetails";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
    <>
      {isClient && isConnected ? (
     <div className="flex gap-12 items-center">
         <w3m-button/>
        {/* <Link href="/user-dashboard" className="hidden lg:block">
        {" "}
       
      </Link> */}
      <UserDetails/>
     </div>
      ) : (
        <Button
          onClick={() => open()}
          variant={"outline"}
          className="py-6 px-7 gap-2 rounded-full border bg-[#0267FF] text-white text-sm w-fit"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  )
}
