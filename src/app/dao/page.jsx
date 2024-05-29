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
            { id: 0, label: "Proposals" },
            { id: 1, label: "Prizes" },
            { id: 2, label: "Draws" },
          ]}
          selectedTab={tab}
          setTab={setTab}
        />

        <div className="p-4 sm:container sm:mx-auto">
          <div>
            {tab == 0 ? <ProposalPage /> : ""}
            {tab == 1 ? <PrizePage /> : ""}
            {tab == 2 ? <DrawPage /> : ""}
          </div>
        </div>
      </div>
   
    </>
  );
}
