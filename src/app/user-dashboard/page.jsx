"use client";

import React, { useState, useEffect } from "react";
import DashboardTabNavigation from "../../components/shared/dashboard-nav";
import { NavBar } from "../../components/shared/nav-bar";
import Overview from "@/components/user-dashboard/Overview";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { useRouter } from "next/navigation";
import NotConnected from "@/components/shared/not-connected";
import AdminOverview from "@/components/admin/AdminOverview";
import { creatorAddress } from "@/connection";

const UserDashboard = () => {
  const [tab, setTab] = useState(0);
  const router = useRouter();

  if (tab == 3) {
    router.push("/dao", { scroll: false });
  }
  const { isConnected, address } = useWeb3ModalAccount();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <NavBar />
      {isConnected && isClient ? (
        <div className="mt-20 relative">
          <DashboardTabNavigation
            tabs={[
              { id: 0, label: "Overview" },
              address == creatorAddress && { id: 1, label: "Admin" }
            ]}
            selectedTab={tab}
            setTab={setTab}
          />

          <div className="p-4 sm:container sm:mx-auto">
            <div>
              {tab == 0 ? <Overview /> : ""}
              {tab == 1 ? <AdminOverview/> : ""}
              {/* {tab == 2 ? <NFTOverview fullPage={true} /> : ""} */}
            </div>
          </div>
        </div>
      ) : (
        <NotConnected />
      )}
    </>
  );
};

export default UserDashboard;
