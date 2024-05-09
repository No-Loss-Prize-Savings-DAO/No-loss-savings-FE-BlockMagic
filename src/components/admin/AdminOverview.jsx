import AdminDepositWithdrawTab from "./AdminDepositWithdrawTab";
import { creatorAddress } from "@/connection";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import AddMember from "./AddMember";
import RemoveMember from "./RemoveMember";
import TransferUSDT from "./TransferUSDT";
import DistributeProfit from "./DistributeProfit";
import OverviewCard from "../dashboards/OverviewCard";
import { useGetContractBalance } from "@/hooks/useGetContractBalance";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function AdminOverview() {
  const { address } = useWeb3ModalAccount();
  const [withdrawals, setWithdrawals] = useState([]);

  const contractBalance = useGetContractBalance();
  const contractAddress = process.env.NEXT_PUBLIC_SAVINGS_CONTRACT;
  const QueryURL = "https://api.studio.thegraph.com/query/72134/blitz/0.0.2";

  const GET_STABLE_WITHDRAWALS = gql`
    query GetStableWithdrawals($contractAddress: String!) {
      stableCoinWithdrawns(where: { user: $contractAddress }) {
        amount
        blockTimestamp
        user
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
          variables: { contractAddress },
        });
        console.log(data);
        setWithdrawals(data?.stableCoinWithdrawns); 
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };

    fetchTransfers();
  }, [address, GET_STABLE_WITHDRAWALS]);
  // console.log(transactions);

  // console.log(userBalance);
  return (
    <>
      {address === creatorAddress ? (
        <div className="mt-16 md:m-16  border-solid border-2 border-grey-500 rounded-2xl">
          <div className="flex flex-col lg:flex-row m-4 mt-0 mb-0">
            <OverviewCard
              title="USDT Balance"
              mainContent={(Number(contractBalance?.stableCoinBalance) / 1e6) || 0}
              // subContent="+20.1% from last month"
            />
            <OverviewCard
              title="Blitz Balance"
              mainContent={(Number(contractBalance?.contractTokenBalance) / 1e18) || 0}
              // subContent="+180.1% from last month"
            />
            <OverviewCard
              title="Withdrawals"
              mainContent={withdrawals.length}
              // subContent="+19% from last month"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
              <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
                <h3 className="font-bold text-lg p-2 px-0">
                  This allows only the Creator to withdraw and refund contract
                  funds
                </h3>
                <AdminDepositWithdrawTab />
              </div>
              <div className="p-8 pt-6 pb-6 m-8 md:w-2/5 border-solid border-2 border-grey-500 rounded-2xl">
                <div className="flex flex-col gap-8">
                  {/* {transactions.map((transaction, index) => ( */}
                  <AddMember />
                  <RemoveMember />
                  {/* ))} */}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row m-2 mt-0 mb-0">
              <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
                <TransferUSDT />
              </div>
              <div className="p-8 pt-6 pb-6 m-8  md:w-3/5 border-solid border-2 border-grey-500 rounded-2xl">
                <DistributeProfit />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-16 ">
          <div className="p-8 pt-6 pb-6 mx-auto  md:w-3/5 ">
            <h3 className="font-bold text-lg text-center p-2 px-0">
              You are not the creator
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
