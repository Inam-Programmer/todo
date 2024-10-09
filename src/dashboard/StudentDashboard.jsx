import Navbar from "@/components/studentComponents/Navbar";
import Sidebar from "@/components/studentComponents/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const StudentsDashboard = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar className="flex basis-1/5 overflow-hidden" />
        <div
          className="flex-1
         pt-11 h-screen overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudentsDashboard;
