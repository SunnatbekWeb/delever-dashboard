import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="pl-8 py-3 pr-5 bg-white min-w-full block">
      <h2 className="text-2xl font-semibold text-[#303940] w-full capitalize">
        {location.pathname == "/" ? "Dashboard" : location.pathname.slice(1)}
      </h2>
    </header>
  );
};

export default Header;
