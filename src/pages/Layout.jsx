import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
