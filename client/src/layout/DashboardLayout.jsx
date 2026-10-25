import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <h1>Side Bar</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
