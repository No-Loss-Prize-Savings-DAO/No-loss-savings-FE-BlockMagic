import Deposit from "@/app/user-dashboard/deposit/page";
import DepositWithdrawTab from "./DepositWithdrawTab";
import TransactionCard from "./TransactionCard";
import OverviewCard from "../dashboards/OverviewCard";
import { getUserDAOStatus, useGetUserBalance } from "@/hooks/useGetUserBalance";
import { getSavingsContract } from "@/constants/contracts";
import { wssProvider } from "@/constants/providers";
import JoinDAO from "./JoinDAO";

export default function asOverview() {
  const userBalance = useGetUserBalance();
  const isDao = getUserDAOStatus();
  const isRejected = localStorage.getItem('rejected');

  async function getTransfer() {
    const contract = getSavingsContract(wssProvider);
    contract.on("AgreementSent", (user, event) => {
      let AgreementSent = {
        user,
        eventData: event,
      };
      console.log(JSON.stringify(AgreementSent, null, 2));
    });
  }

  getTransfer();
  // console.log(userBalance);
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">

      {!isDao && isRejected !== "true" && <JoinDAO />}

      <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
        <OverviewCard
          title="USDT Balance"
          mainContent={Number(userBalance?.stableCoinBalance) / 1e6 || 0}
          // subContent="+20.1% from last month"
        />
        <OverviewCard
          title="Blitz Balance"
          mainContent={Number(userBalance?.contractTokenBalance) / 1e18 || 0}
          // subContent="+180.1% from last month"
        />
        <OverviewCard
          title="Withdrawals"
          mainContent={0}
          // subContent="+19% from last month"
        />
      </div>
      <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
        <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
          <div></div>
          {/* <h3 className="font-bold text-2xl p-2 px-0">Overview</h3> */}
          <DepositWithdrawTab />
        </div>

        <TransactionCard
          title="Transactions"
          transactions={[
            {
              type: "Deposit",
              email: "olivia.martin@email.com",
              amount: "+$200.00",
            },
            {
              type: "Withdrawal",
              email: "olivia.martin@email.com",
              amount: "-$200.00",
            },
            {
              type: "Deposit",
              email: "olivia.martin@email.com",
              amount: "+$1,999.00",
            },
          ]}
        />
      </div>
    </div>
  );
}
