import React from "react";

export default function VoteResult({ yesVotes,
    noVotes,
    abstainVotes }) {

        // Calculate the total number of votes
        const totalVotes = yesVotes + noVotes + abstainVotes;

        // Calculate the percentage of votes for each option
        const yesPercentage = (yesVotes / totalVotes) * 100;
        const noPercentage = (noVotes / totalVotes) * 100;
        const abstainPercentage = (abstainVotes / totalVotes) * 100;

  return (
    <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-sm">
      <h2 className="text-lg font-semibold mb-2">Vote Result</h2>
      <div className="flex flex-col gap-2">
        <div className="items-center">
            <div className="flex justify-between">
          <p className="font-bold text-sm mr-2">Yes:</p>
          <p className="font-bold text-sm ml-2">{yesPercentage.toFixed(1)}%</p>
            </div>

          <div className="w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
            <div
              className="h-full bg-white"
              style={{ width: `${yesPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="items-center">
            <div className="flex justify-between">
          <p className="font-bold text-sm mr-2">No:</p>
          <p className="font-bold text-sm ml-2">{noPercentage.toFixed(1)}%</p>

            </div>
          <div className="w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
            <div
              className="h-full bg-white"
              style={{ width: `${noPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="items-center">
            <div className="flex justify-between">
          <p className="font-bold text-sm mr-2">Abstain:</p>
          <p className="font-bold text-sm ml-2">{abstainPercentage.toFixed(1)}%</p>

            </div>
          <div className="w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
            <div
              className="h-full bg-white"
              style={{ width: `${abstainPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { VoteResult };
