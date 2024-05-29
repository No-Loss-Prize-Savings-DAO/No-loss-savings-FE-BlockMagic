"use client";
import { getSavingsContract } from "@/constants/contracts";
import { wssProvider } from "@/constants/providers";
export default async function getTransfer() {
  const contract = getSavingsContract(wssProvider);
  contract.on("AgreementSent", (user, event) => {
    let AgreementSent = {
      user,
      eventData: event,
    };
    console.log(JSON.stringify(AgreementSent, null, 2));
  });
}

