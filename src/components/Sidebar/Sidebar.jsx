import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import DLetter from "../../assets/DLetter.svg";
import { FaChartBar, FaUser } from "react-icons/fa";
import { IoMdCart, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
import { MenuFoldOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("menuOpen", JSON.stringify(menuOpen));
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          : location.pathname === "/marketing/banners"
          ? "/marketing/banners"
          : location.pathname === "/marketing/reviews"
          ? "/marketing/reviews"
          : location.pathname === "/marketing/sending"
          ? "/marketing/sending"
          : ""
      }`,
      <MdOutlineMyLocation style={{ fontSize: "20px" }} />
    ),
    getItem(
      <NavLink
        to={"/settings/company"}
        onClick={() => setMenuOpen(true)}
      ></NavLink>,
      `${location.pathname === "/settings/company" ? "/settings/company" : location.pathname === "/settings/rates" ? "/settings/rates" : location.pathname ==="/settings/liko" && "/settings/liko"}`,
      <IoMdSettings style={{ fontSize: 20 }} />
    ),
  ];

  return (
    <aside
      className={`h-screen ${menuOpen ? "w-[300px]" : "w-fit"} flex bg-white`}
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
          <Button onClick={toggleMenu}>
            <MenuFoldOutlined />
          </Button>
        </div>
        <div className="marketingMenu flex flex-col mx-4">
          {location.pathname.includes("/marketing") ? (
            <>
              <NavLink to="/marketing/sales">Акции</NavLink>
              <NavLink to="/marketing/banners">Баннеры</NavLink>
              <NavLink to="/marketing/reviews">Отзывы</NavLink>
              <NavLink to="/marketing/sending">Рассылка</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/settings/company">Компания</NavLink>
              <NavLink to="/settings/rates">Тарифы</NavLink>
              <NavLink to="/settings/liko">Liko</NavLink>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
