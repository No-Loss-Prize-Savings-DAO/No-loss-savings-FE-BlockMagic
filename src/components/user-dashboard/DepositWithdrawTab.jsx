import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Deposit from "@/app/user-dashboard/deposit/page";
import Withdraw from "@/app/user-dashboard/withdraw/page";
import { useGetUserTokenBalances } from "@/hooks/useGetUserBalance";

const DepositWithdrawTab = () => {
  const { userUsdtBalance, userBlzBalance } = useGetUserTokenBalances();

  return (
    <Tabs defaultValue="deposit" className="w-full">
      <div className="flex justify-between mb-4">
        <span>
          USDT tokens you own:
          <br /> <span className="font-semibold">{Number(userUsdtBalance) / 1e6}</span>
        </span>
        <span>
          BLZ okens you own:
          <br /> <span className="font-semibold">{Number(userBlzBalance) / 1e18}</span>{" "}
        </span>
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
