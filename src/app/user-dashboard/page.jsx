"use client";

import React, { useState } from "react";
import DashboardTabNavigation from "../../components/shared/dashboard-nav";
import { NavBar } from "../../components/shared/nav-bar";
import Deposit from "./deposit/page";
import Withdraw from "./withdraw/page";

const UserDashboard = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
    <NavBar/>
      <div className="mt-24 relative">
        <DashboardTabNavigation
          tabs={[
            { id: 0, label: "Overview" },
            { id: 1, label: "Deposit" },
            { id: 2, label: "Withdraw" },
          ]}
          selectedTab={tab}
          setTab={setTab}
        />

<div className="p-4 sm:container sm:mx-auto">
            <div>
              {tab == 1 ? <Deposit /> : ""}
              {tab == 2 ? <Withdraw /> : ""}
              {/* {tab == 2 ? <NFTOverview fullPage={true} /> : ""} */}
            </div>
          </div>
      </div>
    </>
  );
};

export default UserDashboard;
