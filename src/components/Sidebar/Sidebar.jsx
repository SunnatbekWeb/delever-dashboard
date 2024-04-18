import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import DLetter from "../../assets/DLetter.svg";
import { FaChartBar, FaUser } from "react-icons/fa";
import { IoMdCart, IoMdNotifications } from "react-icons/io";
import { HiUsers } from "react-icons/hi";

const Sidebar = () => {
  const location = useLocation();

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <aside className="h-screen flex flex-col justify-between bg-white">
      <div>
        <div className="w-10 h-10 bg-[#0974E9FF] grid place-content-center rounded-full m-3">
          <img src={DLetter} alt="D Letter" />
        </div>
        <Menu
          onClick={onClick}
          style={{
            width: "fit-content",
            paddingTop: "12px",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="vertical"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" icon={<FaChartBar style={{ fontSize: "20px" }} />}>
            <NavLink to="/" rel="noopener noreferrer"></NavLink>
          </Menu.Item>
          <Menu.Item
            key="/orders"
            icon={<IoMdCart style={{ fontSize: "20px" }} />}
          >
            <NavLink to="/orders" rel="noopener noreferrer"></NavLink>
          </Menu.Item>
          <Menu.Item
            key="/clients"
            icon={<HiUsers style={{ fontSize: "20px" }} />}
          >
            <NavLink to="/clients" rel="noopener noreferrer"></NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div className="flex flex-col items-center gap-y-6 pb-4">
        <IoMdNotifications style={{ fontSize: "24px", color: "#6E8BB7" }} />
        <div className="w-10 h-10 rounded-full grid place-content-center bg-gray-300">
          <FaUser />
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
