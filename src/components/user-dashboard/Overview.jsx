import Deposit from "@/app/user-dashboard/deposit/page";
import DepositWithdrawTab from "./DepositWithdrawTab";

export default function Overview() {
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
      <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
        <div className="p-12 px-4 pt-6 pb-6 lg:w-1/4  m-6 border-solid border-2 border-grey-500 rounded-2xl">
          <h3 className="text-sm font-medium p-2 px-0">Total Savings</h3>
          <p className="font-bold text-xl">$45,231.89</p>
          <p className="text-xs">+20.1% from last month</p>
        </div>
        <div className="p-12  px-4 pt-6 pb-6 lg:w-1/4 m-6 border-solid border-2 border-grey-500 rounded-2xl ">
          <h3 className="text-sm font-medium p-2 px-0">Withdrawals</h3>
          <p className="font-bold text-xl">$2350</p>
          <p className="text-xs">+180.1% from last month</p>
        </div>
        <div className="p-12 px-4  pt-6 pb-6 lg:w-1/4 m-6 border-solid border-2 border-grey-500 rounded-2xl ">
          <h3 className="text-sm font-medium p-2 px-0">Profits</h3>
          <p className="font-bold text-xl">+12,234</p>
          <p className="text-xs">+19% from last month</p>
        </div>
        <div className="p-12 px-4  pt-6 pb-6 lg:w-1/4 m-6 border-solid border-2 border-grey-500 rounded-2xl ">
          <h3 className="text-sm font-medium p-2 px-0">Active Now</h3>
          <p className="font-bold text-xl">+573</p>
          <p className="text-xs">+201 since last hour</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
        <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
          <div></div>
          {/* <h3 className="font-bold text-2xl p-2 px-0">Overview</h3> */}
          <DepositWithdrawTab/>
        </div>

        <div className="p-8 pt-6 pb-6 m-8 md:w-2/5 border-solid border-2 border-grey-500 rounded-2xl">
          <h3 className="font-bold text-2xl">Transactions</h3>
          <p className="text-sm font-medium">
            You made 4 transactions this month.
          </p>
          <div>
            <div className="flex justify-between items-center p-4 px-0">
              <div>
                <h4 className="font-semibold text-red-500">Withdrawal</h4>

                <p className="text-xs">olivia.martin@email.com</p>
              </div>
              <div>
                <p className="font-bold">-$200.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 px-0">
              <div>
                <h4 className="font-semibold text-green-400">Deposit</h4>
                <p className="text-xs">olivia.martin@email.com</p>
              </div>
              <div>
                <p className="font-bold">+$1,999.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 px-0">
              <div>
              <h4 className="font-semibold text-green-400">Deposit</h4>
                <p className="text-xs">olivia.martin@email.com</p>
              </div>
              <div>
                <p className="font-bold">+$1,999.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 px-0">
              <div>
                <h4 className="font-semibold text-green-400">Deposit</h4>
                <p className="text-xs">olivia.martin@email.com</p>
              </div>
              <div>
                <p className="font-bold">+$1,999.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
