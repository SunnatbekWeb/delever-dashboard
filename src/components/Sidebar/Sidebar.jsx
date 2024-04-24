import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import DLetter from "../../assets/DLetter.svg";
import { FaChartBar, FaUser } from "react-icons/fa";
import { IoMdCart, IoMdNotifications } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { MdOutlineMyLocation } from "react-icons/md";
import { MenuFoldOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const items = [
    {
      key: "1",
      label: <NavLink to="/login">Log out</NavLink>,
    },
  ];

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const menuItems = [
    getItem(
      <NavLink to={"/"} onClick={() => setMenuOpen(false)}></NavLink>,
      "/",
      <FaChartBar style={{ fontSize: "20px" }} />
    ),
    getItem(
      <NavLink to={"/orders"} onClick={() => setMenuOpen(false)}></NavLink>,
      "/orders",
      <IoMdCart style={{ fontSize: "20px" }} />
    ),
    getItem(
      <NavLink
        to={"/marketing/sales"}
        onClick={() => setMenuOpen(true)}
      ></NavLink>,
      `${
        location.pathname === "/marketing/sales"
          ? "/marketing/sales"
          : location.pathname
      }`,
      <MdOutlineMyLocation style={{ fontSize: "20px" }} />
    ),
  ];

  return (
    <aside
      className={`h-screen ${
        menuOpen ? "w-[300px]" : "w-fit"
      } flex bg-white`}
    >
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 bg-[#0974E9FF] grid place-content-center rounded-full m-3">
            <img src={DLetter} alt="D Letter" />
          </div>
          <Menu
            style={{
              width: "fit-content",
              paddingTop: "12px",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
          ></Menu>
        </div>
        <div className="w-[60px] flex flex-col items-center gap-y-6 pb-4">
          <IoMdNotifications style={{ fontSize: "24px", color: "#6E8BB7" }} />
          <Dropdown menu={{ items }} placement="topLeft" arrow>
            <div className="w-10 h-10 rounded-full grid place-content-center bg-gray-300">
              <FaUser />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className={`${menuOpen ? "" : "hidden"} grow`}>
        <div className="m-4 flex items-center justify-between">
          <h3 className="text-2xl text-[#0974E9] font-bold">Delever</h3>
          <Button onClick={() => setMenuOpen(false)}>
            <MenuFoldOutlined />
          </Button>
        </div>
        <div className="marketingMenu flex flex-col mx-4">
          <NavLink to="/marketing/sales">Акции</NavLink>
          <NavLink to="/marketing/banners">Баннеры</NavLink>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
