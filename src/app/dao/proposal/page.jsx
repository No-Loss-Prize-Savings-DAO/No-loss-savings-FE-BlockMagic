"use client";

import React, {useState} from "react";
import { SearchBar } from "@/components/dao/search-bar";
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
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
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

            </div>
          </div>
)}
        </main>
      </div>
    </>
  );
}
