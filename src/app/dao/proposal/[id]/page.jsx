"use client"

import React from "react";
import { NavBar } from "../../../../components/shared/nav-bar";
import { VoteInfo } from "../../../../components/dao/vote-info";
import { VoteResult } from "../../../../components/dao/vote-result";
import { ListOfVoters } from "../../../../components/dao/voters";
import { VoteCast } from "../../../../components/dao/vote-cast";

export default function ProposalDetailPage() {

  // Example array of voters
  const voters = [
    { address: "0x1234567890", vote: "Yes", tokensHeld: 100 },
    { address: "0x0987654321", vote: "No", tokensHeld: 50 },
    // Add more voter objects as needed
  ];

   // Define a function to handle the voting action
   const handleVote = (option) => {
    console.log("Voted:", option); // For demonstration, log the selected option
    // Add your logic to handle the voting action here, such as sending a request to your backend
  };

  return (
    <>
      <NavBar />

      {/* Use the proposal ID to fetch proposal details sample */}
      {/* For now, let's just display the ID */}


{/* Body */}
<main className="max-w-5xl mx-auto py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  <button className="mb-2 cursor-pointer" onClick={() => window.history.back()} >Return back</button>

    <div className="flex flex-col sm:flex-row">


      <div className="flex-1">


        <span
          className="inline-block text-sm rounded-full py-1 px-2 bg-green-600 text-white"
        >
          Open
        </span>

        <div> 
          <h2 className="text-3xl font-bold mb-4 mt-2">Incentive Program for Referrals</h2>
          <h2 className="text-xl font-bold mb-4">
            Introducing a referral incentive program to incentivize existing participants to refer new users to our platform. Participants who successfully refer new users will receive rewards, fostering community growth and engagement in our no-loss saving prize raffle project. Introducing a referral incentive program to incentivize existing participants to refer new users to our platform. Participants who successfully refer new users will receive rewards, fostering community growth and engagement in our no-loss saving prize raffle project. Introducing a referral incentive program to incentivize existing participants to refer new users to our platform. Participants who successfully refer new users will receive rewards, fostering community growth and engagement in our no-loss saving prize raffle project.
          </h2>
        </div>
      </div>

      <div className="sm:ml-4 mt-4 sm:mt-0">
        <VoteInfo
          creator="0x72392329482408248085828"
          votingSystem="Basic voting"
          startDate="2024-02-29T08:54:00Z"
          endDate="2024-03-15T04:59:00Z"
          snapshot="19,331,807"
        />

        <VoteResult
          yesVotes={200}
          noVotes={20}
        />
      </div>
    </div>

 {/* Render the VoteCast component and pass the handleVote function as a prop */}
 <VoteCast onVote={handleVote} />

    {/* Render the ListOfVoters component and pass the voters array as prop */}
    <ListOfVoters voters={voters} />

  </div>
</main>
                
    </>
  );
};
