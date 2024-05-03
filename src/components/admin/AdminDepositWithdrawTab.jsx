import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminWithdraw from './AdminWithdraw';
import AdminDeposit from './AdminDeposit';


const AdminDepositWithdrawTab = () => {
    return (
        <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="deposit">Refund</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit"><AdminDeposit/></TabsContent>
        <TabsContent value="withdraw"><AdminWithdraw/></TabsContent>
      </Tabs>
      
    );
};

export default AdminDepositWithdrawTab;