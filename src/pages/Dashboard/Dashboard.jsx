import React from "react";
import { CiShop } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className=" p-10">
      <div className="flex items-center space-x-12">
        <div className="w-[300px] h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">24</h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Филиалы</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <CiShop style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
        <div className="w-[300px] h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">
              110,823
            </h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Клиенты</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <MdPeople style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
        <div className="w-[300px] h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">
              110,823
            </h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Подписчики</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <FaBell style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
        <div className="w-[300px] h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">75</h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Курьеры</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <FaCar style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
