"use client";

import React from "react";

const TransactionCard = ({ title, transactions }) => {
  const convertBlockTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 as timestamps are usually in seconds
    return date.toLocaleString(); // Adjust the format as needed
  };
  return (
    <div className="p-8 pt-6 pb-6 m-8 md:w-2/5 border-solid border-2 border-grey-500 rounded-2xl">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-sm font-medium">
        You made {transactions.length} transactions this month.
      </p>
      <div className="max-h-[300px] overflow-auto">
        {transactions?.map((transaction, index) => (
          <div
            className="flex justify-between items-center p-4 px-0"
            key={index}
          >
            <div>
              <h4
                className={`font-semibold ${transaction.__typename === "StableCoinWithdrawn" ? "text-red-500" : "text-green-400"}`}
              >
                {transaction.__typename}
              </h4>
              <p className="text-xs">{convertBlockTimestampToDate(transaction.blockTimestamp)}</p>
            </div>
            <div>
              <p className="font-bold">{transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;
