"use client"

import React, { useState } from "react";

export default function VoteCast({ onVote }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleVoteClick = () => {
    if (selectedOption !== null) {
      setShowDialog(true);
    }
  };

  const confirmVote = () => {
    console.log("Voted for:", selectedOption);
    onVote(selectedOption);
    setShowDialog(false);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="border border-slate-800 rounded-lg p-4 mt-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Cast Your Vote</h2>
      <div className="flex gap-4">
        <button
          className={`border-slate-800 border hover:border-2 hover:border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            selectedOption === "yes" ? "border-2 border-white" : ""
          }`}
          onClick={() => handleOptionClick("yes")}
        >
          Yes
        </button>
        <button
          className={`border-slate-800 border hover:border-2 hover:border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            selectedOption === "no" ? "border-2 border-white" : ""
          }`}
          onClick={() => handleOptionClick("no")}
        >
          No
        </button>
        <button
          className={`border-slate-800 border hover:border-2 hover:border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            selectedOption === "abstain" ? "border-2 border-white" : ""
          }`}
          onClick={() => handleOptionClick("abstain")}
        >
          Abstain
        </button>
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
        onClick={handleVoteClick}
      >
        Vote
      </button>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          
          <div className="bg-[#020817] p-8 rounded-lg justify-center">
           <div>
          <h1 className="text-xl font-bold">Confirm vote</h1>
          {/* {selectedOption} */}
          </div>
            <p className="mb-4">Are you sure you want to cast this vote?</p>
            <div className="flex justify-end">
              <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4" onClick={confirmVote}>Confirm</button>
              <button className="border-slate-800 border text-white font-bold py-2 px-4 rounded" onClick={closeDialog}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { VoteCast };