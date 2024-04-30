import { useGetUserBalance } from "@/hooks/useGetUserBalance";
import AdminDepositWithdrawTab from "./AdminDepositWithdrawTab";

export default function AdminOverview() {
  const userBalance =  useGetUserBalance();
  // console.log(userBalance);
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
      {/* <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
        <OverviewCard
          title="USDT Balance"
          mainContent={Number(userBalance?.stableCoinBalance)}
          // subContent="+20.1% from last month"
        />
        <OverviewCard
          title="Blitz Balance"
          mainContent={Number(userBalance?.contractTokenBalance)}
          // subContent="+180.1% from last month"
        />
        <OverviewCard
          title="Withdrawals"
          mainContent={0}
          // subContent="+19% from last month"
        />
        <OverviewCard
          title="Active Now"
          mainContent="+573"
          // subContent="+201 since last hour"
        />
      </div> */}
      <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
        <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
          <div></div>
          {/* <h3 className="font-bold text-2xl p-2 px-0">Overview</h3> */}
          <AdminDepositWithdrawTab/>
        </div>
{/* 
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
        /> */}
      </div>
    </div>
  );
}
