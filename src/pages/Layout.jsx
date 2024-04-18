import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex min-w-full">
        <Sidebar />
        <div className="grow">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
