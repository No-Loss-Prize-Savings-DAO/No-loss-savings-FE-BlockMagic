import Deposit from "@/app/user-dashboard/deposit/page";
import DepositWithdrawTab from "./DepositWithdrawTab";
import TransactionCard from "./TransactionCard";
import OverviewCard from "../dashboards/OverviewCard";

export default function Overview() {
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
      <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
        <OverviewCard
          title="Total Savings"
          mainContent="$45,231.89"
          subContent="+20.1% from last month"
        />
        <OverviewCard
          title="Withdrawals"
          mainContent="$2350"
          subContent="+180.1% from last month"
        />
        <OverviewCard
          title="Profits"
          mainContent="+12,234"
          subContent="+19% from last month"
        />
        <OverviewCard
          title="Active Now"
          mainContent="+573"
          subContent="+201 since last hour"
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
