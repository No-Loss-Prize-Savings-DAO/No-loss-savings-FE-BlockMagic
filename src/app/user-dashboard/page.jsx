"use client";

import React, { useState } from "react";
import DashboardTabNavigation from "../../components/shared/dashboard-nav";
import { NavBar } from "../../components/shared/nav-bar";
import Deposit from "./deposit/page";
import Withdraw from "./withdraw/page";
import Overview from "@/components/user-dashboard/Overview";

import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const [tab, setTab] = useState(0);
  const router = useRouter();

  if (tab == 3) {
    router.push("/dao", { scroll: false });
  }

  return (
    <>
      <NavBar />
      <div className="mt-20 relative">
        <DashboardTabNavigation
          tabs={[
            { id: 0, label: "Overview" },
            { id: 1, label: "Profile" },,
            { id: 2, label: "DAO" },
          ]}
          selectedTab={tab}
          setTab={setTab}
        />

        <div className="p-4 sm:container sm:mx-auto">
          <div>
            {tab == 0 ? <Overview /> : ""}
        
            {/* {tab == 2 ? <NFTOverview fullPage={true} /> : ""} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
