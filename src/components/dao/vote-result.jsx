import React from "react";

export default function VoteResult({ totalVotes, requiredVotes, proposalStatus }) {
   // Check if the proposal is ongoing
   if (proposalStatus === true) {
    return (
        <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Vote Result</h2>
            <p className="font-bold text-sm">Proposal Ongoing</p>
        </div>
    );
} else {
  // Calculate the percentage of total votes
    const totalPercentage = (Number(totalVotes) / Number(requiredVotes)) * 100;

    // Check if the proposal passed
    const proposalPassed = totalPercentage >= 66.67; // 2/3 in percentage

    return (
        <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Vote Result</h2>
            <div className="flex flex-col gap-2">
                {proposalPassed ? (
                    <p className="text-green-500 font-semibold">Proposal passed!</p>
                ) : (
                    <p className="text-red-500 font-semibold">Proposal failed to pass.</p>
                )}
            </div>
        </div>
    );
}

}
    
export { VoteResult };
