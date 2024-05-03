import AdminDepositWithdrawTab from "./AdminDepositWithdrawTab";
import { creatorAddress } from "@/connection";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import AddMember from "./AddMember";
import RemoveMember from "./RemoveMember";
import TransferUSDT from "./TransferUSDT";
import DistributeProfit from "./DistributeProfit";

export default function AdminOverview() {
  const { address } = useWeb3ModalAccount();
  // console.log(userBalance);
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
      {address === creatorAddress ? (
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
            <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
              <h3 className="font-bold text-lg p-2 px-0">
                This allows only the Creator to withdraw and refund contract
                funds
              </h3>
              <AdminDepositWithdrawTab />
            </div>
            <div className="p-8 pt-6 pb-6 m-8 md:w-2/5 border-solid border-2 border-grey-500 rounded-2xl">
              <div className="flex flex-col gap-8">
                {/* {transactions.map((transaction, index) => ( */}
                <AddMember />
                <RemoveMember />
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
            <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
              <TransferUSDT />
            </div>
            <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
              <DistributeProfit />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
          <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
            <h3 className="font-bold text-lg p-2 px-0">
              You are not the creator
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
