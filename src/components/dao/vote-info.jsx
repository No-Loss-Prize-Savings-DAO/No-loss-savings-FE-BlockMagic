
export default function VoteInfo({ creator, votingSystem, duration, startDate, endDate, snapshot, proposalStatus, totalVoters }) {

  const truncatedCreator =
  creator && creator.length > 10
    ? creator.substring(0, 6) + "..." + creator.substring(creator.length - 4)
    : creator;

    // Calculate duration based on the end date and status
    let durationText = "";
    if (duration !== null && proposalStatus === true) {
      const endDateObj = new Date(Number(BigInt(duration) * 1000n)); // Convert seconds to milliseconds
      const currentDate = new Date();
      const timeDiff = endDateObj.getTime() - currentDate.getTime();
      const daysDiff = Math.ceil(Number(timeDiff) / (1000 * 3600 * 24));
    
      if (daysDiff > 0 && proposalStatus === true) {
        durationText = `Ends in ${daysDiff} day${daysDiff === 1 ? "" : "s"}`;
      } else {
        durationText = "Ending today";
      }
    } else if (proposalStatus === false) {
      durationText = "Proposal Ended"
    } else {
      durationText = "Duration not available";
    }
    

    return (
        <>
         <div className="border border-slate-800 rounded-lg p-4 mt-4 inline-block max-w-max">
      <h2 className="text-lg font-semibold mb-3">Vote Information</h2>
      <div className="grid grid-cols-2">
      <p className="font-bold text-sm mb-2 text-[#8b949e]">Created by:</p>
        <p className="font-bold text-sm text-right">{truncatedCreator}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Basic voting:</p>
        <p className="font-bold text-sm text-right">{votingSystem}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Duration:</p>
        <p className="font-bold text-sm text-right">{durationText}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Total Votes:</p>
        <p className="font-bold text-sm text-right">{totalVoters}</p>
        {/* <p className="font-bold text-sm mb-2 text-[#8b949e]">Start date:</p>
        <p className="font-bold text-sm text-right">{startDate}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">End date:</p>
        <p className="font-bold text-sm text-right">{endDate}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Snapshot:</p>
        <p className="font-bold text-sm text-right">{snapshot}</p> */}
      </div>
    </div>
        </>
    )
}


export { VoteInfo }