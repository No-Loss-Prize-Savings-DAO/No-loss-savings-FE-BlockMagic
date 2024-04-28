
export default function VoteInfo({ creator, votingSystem, startDate, endDate, snapshot }) {
     // Format the start and end dates
  const formattedStartDate = new Date(startDate).toLocaleString();
  const formattedEndDate = new Date(endDate).toLocaleString();

    // Truncate address
    const truncatedAddress = truncateText(creator, 3);

    return (
        // #8b949e
        <>
         <div className="border border-slate-800 rounded-lg p-4 mt-4 inline-block max-w-max">
      <h2 className="text-lg font-semibold mb-3">Vote Information</h2>
      <div className="grid grid-cols-2">
      <p className="font-bold text-sm mb-2 text-[#8b949e]">Created by:</p>
        <p className="font-bold text-sm text-right">{truncatedAddress}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Basic voting:</p>
        <p className="font-bold text-sm text-right">{votingSystem}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Start date:</p>
        <p className="font-bold text-sm text-right">{formattedStartDate}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">End date:</p>
        <p className="font-bold text-sm text-right">{formattedEndDate}</p>
        <p className="font-bold text-sm mb-2 text-[#8b949e]">Snapshot:</p>
        <p className="font-bold text-sm text-right">{snapshot}</p>
      </div>
    </div>
        </>
    )
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    const start = text.substr(0, 6);
    const middle = "*****"; // You can customize this based on your needs
    const end = text.substr(-4);
    return `${start}${middle}${end}`;
  }


export { VoteInfo }