import React from "react";
import { Outlet } from "react-router";
import SideBar from "../components/DashBoardComponents/SideBar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar */}
      <SideBar />

      {/* Right Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
