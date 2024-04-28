import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Deposit from '@/app/user-dashboard/deposit/page';
import Withdraw from '@/app/user-dashboard/withdraw/page';


const DepositWithdrawTab = () => {
    return (
        <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit"><Deposit/></TabsContent>
        <TabsContent value="withdraw"><Withdraw/></TabsContent>
      </Tabs>
      
    );
};

export default DepositWithdrawTab;