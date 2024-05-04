"use client";

import React, {useState} from "react";
import { SearchBar } from "@/components/dao/search-bar";
import { ProposalCard } from "@/components/dao/proposal-card";
import { ProposalList } from '@/app/dao/proposal/ProposalList';
import NewProposalDialog from "./NewProposalDialog";
import Loading from "@/components/shared/Loading";

export default function ProposalPage() {
  const [loading] = useState(false);

  return (
    <>
    
      <div className="min-h-screen ">
        {/* Body */}
        <main className="p-4 sm:container sm:mx-auto mx-auto py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Proposals</h2>
          </div>

        <div className="flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
          <NewProposalDialog />
        </div>

          {/* Proposal list */}
          {loading ? (
            <Loading /> // Display loader while loading
          ) : (
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-4">

              <ProposalList />

              {/* <ProposalCard
              id={1}
                iconUrl="https://cdn.stamp.fyi/avatar/eth:0x28dF6625EF078Dc816423AE27830733Ee0aDd3da?s=40"
                name="victor.eth"
                status="Closed"
                title="Smart Contract Audit and Security"
                description="Establishing a research and development fund to support the exploration of innovative features, technologies, and methodologies for our platform. Investing in research and development will drive continuous improvement and innovation in our no-loss saving prize raffle project."
                onClick=""
                yesVotes={200}
                noVotes={10}
                endDate={"2024-04-01"} // Sample end date, format: "YYYY-MM-DD"
                
              />  */}

            </div>
          </div>
)}
        </main>
      </div>
    </>
  );
}
