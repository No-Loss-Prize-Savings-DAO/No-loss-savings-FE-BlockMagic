"use client";

import React from 'react';

const OverviewCard = ({ title, mainContent, subContent }) => (
  <div className="p-12 px-4 pt-6 pb-6 lg:w-1/4  m-6 border-solid border-2 border-grey-500 rounded-2xl">
    <h3 className="text-sm font-medium p-2 px-0">{title}</h3>
    <p className="font-bold text-xl">{mainContent}</p>
    <p className="text-xs">{subContent}</p>
  </div>
);

export default OverviewCard;