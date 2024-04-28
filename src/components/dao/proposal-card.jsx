import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProposalCard({
  id,
  name,
  status,
  title,
  description,
  iconUrl,
  yesVotes,
  noVotes,
  abstainVotes,
  endDate,
}) {
  const router = useRouter();

   // Function to handle card click and navigate to proposal details page
   const handleCardClick = () => {
    // Navigate to proposal details page with the proposal id
    router.push(  `/dao/proposal/${id}`);
  };

    // Calculate the total number of votes
    const totalVotes = yesVotes + noVotes + abstainVotes;

    // Calculate the percentage of votes for each option
    const yesPercentage = (yesVotes / totalVotes) * 100;
    const noPercentage = (noVotes / totalVotes) * 100;
    const abstainPercentage = (abstainVotes / totalVotes) * 100;

    // Calculate duration based on the end date and status
  let durationText = "";
  if (status === "Open") {
    const endDateObj = new Date(endDate);
    const currentDate = new Date();
    const timeDiff = endDateObj.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff > 0) {
      durationText = `Ends in ${daysDiff} day${daysDiff === 1 ? "" : "s"}`;
    } else {
      durationText = "Ending today";
    }
  } else if (status === "Closed") {
    const endDateObj = new Date(endDate);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - endDateObj.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
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
            <Image
              src={iconUrl}
              alt="Default Icon"
              className="w-6 h-6 object-cover"
              height={24}
              width={24}
            />
          </div>
          <span className="font-semibold text-sm">{name}</span>
        </div>

        <span
          className={`inline-block text-sm rounded-full py-1 px-2 ${
            status === "Open"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base font-semibold text-[#f0f0f0]">{description}</p>

          {/* Vote Poll Display UI */}
          <div className="mt-4">
          <div className="flex items-center">
            <div className="flex-1 mr-2">
              <div className="h-4 bg-gray-300 rounded-lg" style={{ width: `${yesPercentage}%` }}></div>
            </div>
            <span className="text-sm">Yes: {yesPercentage.toFixed(1)}%</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex-1 mr-2">
              <div className="h-4 bg-gray-300 rounded-lg" style={{ width: `${noPercentage}%` }}></div>
            </div>
            <span className="text-sm">No: {noPercentage.toFixed(1)}%</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex-1 mr-2">
              <div className="h-4 bg-gray-300 rounded-lg" style={{ width: `${abstainPercentage}%` }}></div>
            </div>
            <span className="text-sm">Abstain: {abstainPercentage.toFixed(1)}%</span>
          </div>
          </div>

          {/* Duration */}
        <div className="mt-2 text-sm">
          {status === "Open" && (
            <span>{durationText}</span>
          )}
          {status === "Closed" && (
            <span>{durationText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProposalCard };
