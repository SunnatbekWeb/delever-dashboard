import React, { useEffect, useState } from "react";
import { CiShop } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { FaAngleDown, FaBell } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { LineChart } from "@mui/x-charts/LineChart";
import Chart1 from "../../assets/chart1.svg";
import Chart2 from "../../assets/chart2.svg";
import Chart3 from "../../assets/chart3.svg";
import topOrder from "../../assets/topOrder.svg";
import avgOrder from "../../assets/avOrder.svg";
import { Table } from "antd";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem("activeTab") || "tab1"
  );

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const columns = [
    {
      title: "Число",
      dataIndex: "count",
      key: "count",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Доставка",
      dataIndex: "delivery",
      key: "delivery",
    },
    {
      title: "Доставка",
      dataIndex: "delivery1",
      key: "delivery1",
    },
    {
      title: "Самовывоз",
      dataIndex: "pickup",
      key: "pickup",
    },
    {
      title: "Агрегаторы",
      dataIndex: "aggregators",
      key: "aggregators",
    },
  ];

  const data = [
    {
      key: "1",
      count: 4938,
      delivery: 32,
      delivery1: 213,
      pickup: 1232,
      aggregators: 12342,
    },
    {
      key: "2",
      count: 4658,
      delivery: 32,
      delivery1: 123,
      pickup: 1232,
      aggregators: 12342,
    },
    {
      key: "3",
      count: 5115,
      delivery: 32,
      delivery1: 4157,
      pickup: 1232,
      aggregators: 12342,
    },
  ];

  return (
    <div className=" p-10">
      <div className="grid grid-cols-4 gap-x-5 mb-5">
        <div className="max-w-full h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">24</h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Филиалы</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <CiShop style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
        <div className="max-w-full h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
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
        <div className="max-w-full h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
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
        <div className="max-w-full h-[140px] bg-slate-50 rounded-md flex items-center justify-between p-4">
          <div>
            <h2 className="text-[#4094F7] font-medium text-4xl pb-4">75</h2>
            <p className=" text-[#6E8BB7] font-medium text-xl">Курьеры</p>
          </div>
          <div className="p-3 bg-blue-200 rounded-md">
            <FaCar style={{ fontSize: "60px", color: "#4094F7" }} />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div>
          <div className="p-6 max-w-[280px] mb-5 bg-white">
            <p className="text-sm text-[#6E8BB7] mb-2">
              Total orders this month
            </p>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-[#303940]">1,850</h4>
              <div className="flex items-center gap-x-2 bg-[#F2271C1A] rounded-xl ps-3 py-2 pe-2">
                <span className="text-2xl text-[#F2271C] font-semibold">
                  -5%
                </span>
                <div className="w-6 h-6 grid place-content-center bg-[#F2271C26] rounded-full">
                  <FaAngleDown style={{ fontSize: 16, color: "#F2271C" }} />
                </div>
              </div>
            </div>
            <img src={Chart1} alt="Chart" />
          </div>

          <div className="p-6 max-w-[280px] mb-5 bg-white">
            <p className="text-sm text-[#6E8BB7] mb-2">Earning this month</p>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-[#303940]">1,850</h4>
              <div className="flex items-center gap-x-2 bg-[#1AC19D26] rounded-xl ps-3 py-2 pe-2">
                <span className="text-2xl text-[#1AC19D] font-semibold">
                  -5%
                </span>
                <div className="w-6 h-6 grid place-content-center bg-[#1AC19D33] rounded-full">
                  <FaAngleDown
                    style={{ fontSize: 16, color: "#1AC19D", rotate: "180deg" }}
                  />
                </div>
              </div>
            </div>
            <img src={Chart2} alt="Chart" />
          </div>

          <div className="p-6 max-w-[280px] mb-5 bg-white">
            <p className="text-sm text-[#6E8BB7] mb-2">
              Total orders this month
            </p>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-[#303940]">1,850</h4>
              <div className="flex items-center gap-x-2 bg-[#1AC19D26] rounded-xl ps-3 py-2 pe-2">
                <span className="text-2xl text-[#1AC19D] font-semibold">
                  -5%
                </span>
                <div className="w-6 h-6 grid place-content-center bg-[#1AC19D33] rounded-full">
                  <FaAngleDown
                    style={{ fontSize: 16, color: "#1AC19D", rotate: "180deg" }}
                  />
                </div>
              </div>
            </div>
            <img src={Chart3} alt="Chart" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="flex items-center w-full justify-center p-6 bg-white rounded-md gap-x-10">
              <img src={topOrder} alt="Top order 75%" />
              <div>
                <p className="text-sm text-[#6E8BB7]">Top Order</p>
                <h5 className="text-[40px] font-bold text-[#1AC19D]">75%</h5>
              </div>
            </div>
            <div className="flex items-center w-full justify-center p-6 bg-white rounded-md gap-x-10">
              <img src={avgOrder} alt="Average order 40%" />
              <div>
                <p className="text-sm text-[#6E8BB7]">Top Order</p>
                <h5 className="text-[40px] font-bold text-[#A23FEE]">40%</h5>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={1460}
              height={442}
            />
            <div>
              <div className="tab flex items-center justify-center gap-x-3 border-t-2">
                <div
                  className={`w-[100px] flex justify-center py-4 px-[18px] ${
                    activeTab === "tab1" ? "border-b-4 border-[#4094F7]" : ""
                  } cursor-pointer`}
                  onClick={() => handleTabClick("tab1")}
                >
                  <p className="text-sm text-[#4094F7] font-medium">Неделья</p>
                </div>
                <div
                  className={`w-[100px] flex justify-center py-4 px-[18px] ${
                    activeTab === "tab2" ? "border-b-4 border-[#4094F7]" : ""
                  } cursor-pointer`}
                  onClick={() => handleTabClick("tab2")}
                >
                  <p className="text-sm text-[#4094F7] font-medium">Месяц</p>
                </div>
                <div
                  className={`w-[100px] flex justify-center py-4 px-[18px] ${
                    activeTab === "tab3" ? "border-b-4 border-[#4094F7]" : ""
                  } cursor-pointer`}
                  onClick={() => handleTabClick("tab3")}
                >
                  <p className="text-sm text-[#4094F7] font-medium">Год</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 bg-white">
        {activeTab === "tab1" && (
          <>
            <h4 className="text-lg font-semibold text-[#5B6871]">
              Недельный отчет
            </h4>
            <Table columns={columns} dataSource={data} />
          </>
        )}
        {activeTab === "tab2" && (
          <>
            <h4 className="text-lg font-semibold text-[#5B6871]">
              Месяцовый отчет
            </h4>
            <Table columns={columns} dataSource={data} />
          </>
        )}
        {activeTab === "tab3" && (
          <>
            <h4 className="text-lg font-semibold text-[#5B6871]">
              Годовой отчет
            </h4>
            <Table columns={columns} dataSource={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
