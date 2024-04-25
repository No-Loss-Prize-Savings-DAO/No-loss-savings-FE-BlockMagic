"use client"

import React from "react";
import { useRouter } from "next/navigation";

export default function ProposalDetailPage({ params }) {
  const router = useRouter();

  // Use the proposal ID to fetch proposal details if needed
  // For now, let's just display the ID
  return (
    <div>
      <h1>Proposal Detail</h1>
      <p>ID: {params.id}</p>
      {/* Display other details of the proposal */}
    </div>
  );
};


