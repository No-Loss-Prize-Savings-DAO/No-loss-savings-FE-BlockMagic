"use client";

import React, { useState } from "react";
import DashboardTabNavigation from "../../components/shared/dashboard-nav";
import { NavBar } from "../../components/shared/nav-bar";
import ProposalPage from "@/app/dao/proposal/page";
import PrizePage from "@/app/dao/prize/page";
import DrawPage from "@/app/dao/draw/page";

export default function Overview() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <NavBar />
      <div className="mt-20 relative">
        <DashboardTabNavigation
          tabs={[
            { id: 0, label: "Overview" },
            { id: 1, label: "Proposals" },
            { id: 2, label: "Prizes" },
            { id: 3, label: "Draws" },
          ]}
          selectedTab={tab}
          setTab={setTab}
        />

<div className="p-4 sm:container sm:mx-auto">
            <div>
              {tab == 1 ? <ProposalPage /> : ""}
              {tab == 2 ? <PrizePage /> : ""}
              {tab == 3 ? <DrawPage /> : ""}
              {/* {tab == 2 ? <NFTOverview fullPage={true} /> : ""} */}
            </div>
          </div>
      </div>

      <div className="min-h-screen ">
        {/* Body */}
        <main className="max-w-5xl mx-auto py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
          </div>

        </main>
      </div>
    </>
  );
}
