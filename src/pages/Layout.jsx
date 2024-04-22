import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const mainRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setScrollPosition(mainRef.current.scrollTop);
      }
    };

    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="flex min-w-full">
        <Sidebar />
        <div className="grow">
          <Header />
          <main
            ref={mainRef}
            className="overflow-y-scroll"
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
