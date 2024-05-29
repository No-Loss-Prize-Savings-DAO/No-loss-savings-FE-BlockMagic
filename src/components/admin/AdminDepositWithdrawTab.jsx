import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminWithdraw from "./AdminWithdraw";
import AdminDeposit from "./AdminDeposit";
import { getContractTokenBalances } from "@/hooks/useGetContractBalance";

const AdminDepositWithdrawTab = () => {
  const { contractUsdtBalance, contractBlzBalance } =
    getContractTokenBalances();

  return (
    <Tabs defaultValue="deposit" className="w-full">
      <div className="flex justify-between mb-4">
        <span>
          USDT tokens in the contract: <br />
          <span className="font-semibold">{Number(contractUsdtBalance) / 1e6}</span>
        </span>
        <span>
          BLZ tokens in the contract: <br />
          <span className="font-semibold">{Number(contractBlzBalance) / 1e18}</span>
        </span>
      </div>
      <TabsList className="w-full">
        <TabsTrigger value="deposit">Refund</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>
      <TabsContent value="deposit">
        <AdminDeposit />
      </TabsContent>
      <TabsContent value="withdraw">
        <AdminWithdraw />
      </TabsContent>
    </Tabs>
  );
};

export default AdminDepositWithdrawTab;
