import Deposit from "@/app/user-dashboard/deposit/page";
import DepositWithdrawTab from "./DepositWithdrawTab";
import TransactionCard from "./TransactionCard";
import OverviewCard from "../dashboards/OverviewCard";
import { getUserDAOStatus, useGetUserBalance } from "@/hooks/useGetUserBalance";
import { getSavingsContract } from "@/constants/contracts";
import { wssProvider } from "@/constants/providers";
import JoinDAO from "./JoinDAO";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function asOverview() {
  const userBalance = useGetUserBalance();
  const isDao = getUserDAOStatus();
  const isRejected = localStorage.getItem("rejected");
  const { address } = useWeb3ModalAccount();
  const [withdrawals, setWithdrawals] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const QueryURL = "https://api.studio.thegraph.com/query/72134/blitz/v0.0.1";

  const GET_STABLE_WITHDRAWALS = gql`
    query GetStableWithdrawals($address: String!) {
      stableCoinWithdrawns(where: { user: $address }) {
        amount
        blockTimestamp
        user
      }
      stableCoinDepositeds(where: { user: $address }) {
        amount
        user
        blockTimestamp
      }
    }
  `;

  useEffect(() => {
    const client = new ApolloClient({
      uri: QueryURL,
      cache: new InMemoryCache(),
    });

    const fetchTransfers = async () => {
      try {
        const { data } = await client.query({
          query: GET_STABLE_WITHDRAWALS,
          variables: { address },
        });
        console.log(data);
       
        setDeposits(data?.stableCoinDepositeds);
        setWithdrawals(data?.stableCoinWithdrawns); 
        setTransactions([...data?.stableCoinDepositeds, ...data?.stableCoinWithdrawns])
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };

    fetchTransfers();
  }, [address, GET_STABLE_WITHDRAWALS, userBalance]);
  // console.log(transactions);


  // console.log(userBalance);
  return (
    <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
      {!isDao && userBalance >=3000 && isRejected !== "true" && <JoinDAO />}

      <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
        <OverviewCard
          title="USDT Savings"
          mainContent={Number(userBalance?.stableCoinBalance) / 1e6 || 0}
          // subContent="+20.1% from last month"
        />
        <OverviewCard
          title="Blitz Accrued"
          mainContent={Number(userBalance?.contractTokenBalance) / 1e18 || 0}
          // subContent="+180.1% from last month"
        />
        <OverviewCard
          title="Withdrawals"
          mainContent={withdrawals.length}
          // subContent="+19% from last month"
        />
      </div>
      <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
        <div className="px-4 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
          <div></div>
          {/* <h3 className="font-bold text-2xl p-2 px-0">Overview</h3> */}
          <DepositWithdrawTab />
        </div>

        <TransactionCard
          title="Transactions"
          transactions={
            Array.isArray(transactions) ? transactions.sort((a, b) => a.blockTimestamp - b.blockTimestamp) : []
          }
        />
      </div>
    </div>
  );
}
