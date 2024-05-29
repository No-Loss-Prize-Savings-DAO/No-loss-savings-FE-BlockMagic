import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Deposit from "@/app/user-dashboard/deposit/page";
import Withdraw from "@/app/user-dashboard/withdraw/page";
import { getUserTokenBalances } from "@/hooks/useGetUserBalance";

const DepositWithdrawTab = () => {
  const { userUsdtBalance, userBlzBalance } = getUserTokenBalances();
  
  return (
    <Tabs defaultValue="deposit" className="w-full">
      <div className="flex justify-between mb-4">
        <span>USDT: {Number(userUsdtBalance )/ 1e6}</span>
        <span>BLZ: {Number(userBlzBalance)/1e18}</span>
      </div>
      <TabsList className="w-full">
        <TabsTrigger value="deposit">Deposit</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>
      <TabsContent value="deposit">
        <Deposit />
      </TabsContent>
      <TabsContent value="withdraw">
        <Withdraw />
      </TabsContent>
    </Tabs>
  );
};

export default DepositWithdrawTab;
