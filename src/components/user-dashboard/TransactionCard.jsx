"use client";

import React from 'react';

const TransactionCard = ({ title, transactions }) => (
  <div className="p-8 pt-6 pb-6 m-8 md:w-2/5 border-solid border-2 border-grey-500 rounded-2xl">
    <h3 className="font-bold text-2xl">{title}</h3>
    <p className="text-sm font-medium">
      You made {transactions.length} transactions this month.
    </p>
    <div>
      {transactions.map((transaction, index) => (
        <div className="flex justify-between items-center p-4 px-0" key={index}>
          <div>
            <h4 className={`font-semibold ${transaction.type === 'Withdrawal' ? 'text-red-500' : 'text-green-400'}`}>{transaction.type}</h4>
            <p className="text-xs">{transaction.email}</p>
          </div>
          <div>
            <p className="font-bold">{transaction.amount}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionCard;