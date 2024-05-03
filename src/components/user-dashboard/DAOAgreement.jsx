import React from "react";
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AcceptDaoMembership from "./AcceptDaoMembership";

function DAOAgreement({onSubmit}) {

    
  const setRejectedState = () => {
    localStorage.setItem("rejected", "true");
    onSubmit();
  };
  return (
    <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
      <DialogTitle className="text-3xl">DAO Member Agreement</DialogTitle>
      <div className="max-h-[600px] overflow-auto pb-8">
        <h2 className="text-xl font-semibold mb-0">
          Anti-Money Laundering/KYC
        </h2>
        <p className="mb-4">
          Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations
          require us to verify your identity and monitor transactions to prevent
          illegal activities such as money laundering and terrorist financing.
        </p>

        <h2 className="text-xl font-semibold mb-0">Securities</h2>
        <p className="mb-4">
          Securities regulations govern the sale and distribution of investment
          products, including digital assets such as tokens. Compliance with
          these regulations helps protect investors and ensures fair and
          transparent markets.
        </p>

        <h2 className="text-xl font-semibold mb-0">Tax</h2>
        <p className="mb-4">
          Tax regulations govern the taxation of cryptocurrency transactions,
          including buying, selling, and trading digital assets. Understanding
          your tax obligations is important to ensure compliance with the law.
        </p>

        <h2 className="text-xl font-semibold">DAO regulations</h2>
        <p className="mb-4">
          A lock period will be initiated for an amount of $3000 for one year.
          All DAOs gets to share 30% of the total complete on each prize
          distribution. A DAO can earn more when his proposal is accepted.
          Before proposing a business idea within the DAO, members should
          conduct thorough due diligence to assess potential risks and ensure
          the viability of the proposal. DAO funds are at risk, and improper
          proposals may lead to losses for the community. Members found to have
          knowingly proposed fraudulent or risky ventures may face penalties,
          including loss of tokens or expulsion from the DAO.
        </p>
      </div>
      <DialogFooter className="absolute bottom-0 p-4 bg-opacity-30 backdrop-blur-lg backdrop-filter w-full flex justify-between">
        <div className=" w-full flex gap-8">
          <AcceptDaoMembership closeModal={onSubmit}/>
          {/* <Button type="submit"   variant={"outline"} className="bg-[#0267FF] text-white rounded-xl">Accept</Button> */}

          <Button
            type="submit"
            variant={"destructive"}
            className="bg-red-600 text-white rounded-xl"
            onClick={setRejectedState}
          >
            Reject
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}

export default DAOAgreement;
