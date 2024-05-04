import React from "react";
import { useRouter } from "next/navigation";

export default function ProposalCard({
  id,
  creator,
  status,
  title,
  description,
  yesVotes,
  noVotes,
  endDate,
}) {
  const router = useRouter();

  const truncatedCreator =
  creator && creator.length > 10
    ? creator.substring(0, 6) + "..." + creator.substring(creator.length - 4)
    : creator;

   // Function to handle card click and navigate to proposal details page
   const handleCardClick = () => {
    // Navigate to proposal details page with the proposal id
    router.push(  `/dao/proposal/${id}`);
  };

    // Calculate the total number of votes
    const totalVotes = yesVotes + noVotes;

    // Calculate the percentage of votes for each option
    const yesPercentage = (yesVotes / totalVotes) * 100;
    const noPercentage = (noVotes / totalVotes) * 100;

// Calculate duration based on the end date and status
let durationText = "";
if (status === true) {
  const endDateObj = new Date(Number(BigInt(endDate) * 1000n)); // Convert seconds to milliseconds
  const currentDate = new Date();
  const timeDiff = endDateObj.getTime() - currentDate.getTime();
  const daysDiff = Math.ceil(Number(timeDiff) / (1000 * 3600 * 24));

  if (daysDiff > 0) {
    durationText = `Ends in ${daysDiff} day${daysDiff === 1 ? "" : "s"}`;
  } else {
    durationText = "Ending today";
  }
} else if (status === false) {
  const endDateObj = new Date(Number(BigInt(endDate) * 1000n)); // Convert seconds to milliseconds
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - endDateObj.getTime();
  const daysDiff = Math.floor(Number(timeDiff) / (1000 * 3600 * 24));
  const monthsDiff = Math.floor(daysDiff / 30);

  if (monthsDiff === 0) {
    durationText = `Ended ${daysDiff} day${daysDiff === 1 ? "" : "s"} ago`;
  } else {
    durationText = `Ended ${monthsDiff} month${monthsDiff === 1 ? "" : "s"} ago`;
  }
}



  return (
    <div
      className="border border-slate-800  rounded-lg p-4 cursor-pointer hover:shadow-md"
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="mr-2 overflow-hidden rounded-full">
            Proposer:
          </div>
          <span className="font-semibold text-sm">{truncatedCreator}</span>
        </div>

        <span
          className={`inline-block text-sm rounded-full py-1 px-2 ${
            status === true
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {status === true
              ? "Open"
              : "Closed"}
        </span>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base font-semibold text-[#f0f0f0]">{description}</p>

          {/* Duration */}
        <div className="mt-2 text-sm">
          {status === true && (
            <span>{durationText}</span>
          )}
          {status === false && (
            <span>{durationText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProposalCard };
