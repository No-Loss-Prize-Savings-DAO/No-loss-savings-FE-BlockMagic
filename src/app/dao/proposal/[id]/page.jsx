"use client"

import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import { NavBar } from "../../../../components/shared/nav-bar";
import { VoteInfo } from "../../../../components/dao/vote-info";
import { VoteResult } from "../../../../components/dao/vote-result";
import { ListOfVoters } from "../../../../components/dao/voters";
import { VoteCast } from "../../../../components/dao/vote-cast";

import { ArrowLeft } from 'lucide-react';

import { getDAOContract } from "@/constants/contracts";
import { getProvider } from "@/constants/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import Loading from "@/components/shared/Loading";

export default function ProposalDetailPage({params}) {
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(false);

  const { walletProvider } = useWeb3ModalProvider();
  const readWriteProvider = getProvider(walletProvider);

  const router = useRouter();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    const fetchProposal = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;
        
        const daoContract = getDAOContract(signer);

        const proposalData = await daoContract.proposals(id);

        setProposal(proposalData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching proposal:", error);
        setLoading(false);
        // Handle error fetching proposal
      }
    };

    fetchProposal();
  }, [id]);

  const voters = [
    { address: "0x1234567890", vote: "Yes", tokensHeld: 100 },
    { address: "0x0987654321", vote: "No", tokensHeld: 50 },
  ];

   // Define a function to handle the voting action
   const handleVote = (option) => {
    console.log("Voted:", option); // For demonstration, log the selected option
    // Add your logic to handle the voting action here, such as sending a request to your backend
  };

  return (
    <>
      <NavBar />

{/* Body */}
<main className="max-w-5xl mx-auto py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex" onClick={() => window.history.back()}>
<ArrowLeft />
  <button className="mb-2 cursor-pointer"> Return back</button>

</div>

  {loading ? (
            <Loading /> // Display loader while loading
          ) : (
    <div className="flex flex-col sm:flex-row">


      <div className="flex-1">


  <span
  className={`inline-block text-sm rounded-full py-1 px-2 ${
    proposal && proposal.active ? 'bg-green-600' : 'bg-red-600'
  } text-white`}
>
  {proposal && proposal.active ? 'Open' : 'Closed'}
</span>


        <div> 
          {/* <h2 className="text-3xl font-bold mb-4 mt-2">Incentive Program for Referrals</h2> */}
          <h2 className="text-xl font-bold mb-4 mt-2">
          {proposal && proposal.description}
          </h2>
        </div>
      </div>

      <div className="sm:ml-4 mt-4 sm:mt-0">
        <VoteInfo
          creator={proposal && proposal.proposer}
          votingSystem="Basic voting"
          duration={proposal && proposal.endTime}
          proposalStatus={proposal && proposal.active}
          totalVotes={proposal && proposal.totalVotes}
          // startDate="2024-02-29T08:54:00Z"
          // endDate={proposal && proposal.endTime}
          // snapshot="19,331,807"
        />

        <VoteResult
          totalVotes={proposal && proposal.totalVotes}
          requiredVotes={proposal && proposal.requiredVotes}
          proposalStatus={proposal && proposal.active}
        />
      </div>
    </div>
)}
 {/* Render the VoteCast component and pass the handleVote function as a prop */}
 <VoteCast proposalId={id} />

    {/* Render the ListOfVoters component and pass the voters array as prop */}
    <ListOfVoters voters={voters} />

  </div>
</main>
                
    </>
  );
};
