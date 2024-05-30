import React, { useState } from "react";

export default function ListOfVoters({ voters }) {
  const [showMore, setShowMore] = useState(false);

  // Function to toggle showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

    // Function to truncate address
    const truncateAddress = (address) => {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
      };

  // Function to render voter rows
  const renderVoterRows = () => {
    // If showMore is true, render all voters, otherwise, render only the first 10 voters
    const votersToShow = showMore ? voters : voters.slice(0, 10);

    return votersToShow.map((voter, index) => (
      <div key={index} className="flex py-2 text-sm font-bold">
        <div className="w-1/3 text-left">{truncateAddress(voter.address)}</div>
        <div className="w-1/3 text-center">{voter.vote}</div>
        <div className="w-1/3 text-right">{voter.tokensHeld} BLZ</div>
      </div>
    ));
  };

  return (
    <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-lg">
              <h2 className="text-lg font-semibold mb-2">Voters ({voters.length})</h2>
    {renderVoterRows()}
    {/* Show More Button */}
    {voters.length > 10 && (
      <button
        className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        onClick={toggleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    )}
  </div>
  );
}

export { ListOfVoters };