import Image from "next/image";
import React from "react";

export default function ProposalCard({
  name,
  status,
  title,
  description,
  onClick,
  iconUrl,
}) {
  return (
    <div
      className="border border-slate-800  rounded-lg p-4 cursor-pointer hover:shadow-md"
      onClick={onClick}
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
      </div>
    </div>
  );
}

export { ProposalCard };
