import React from "react";
import { Input, Table, Tabs } from "antd";
import Regions from "../Regions/Regions";
import Filials from "../Filials/Filials";

const Company = () => {
  // Table columns
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Описание",
      dataIndex: "about",
    },
    {
      title: "Год основания",
      dataIndex: "year",
    },
  ];

  // Table data 1
  const data = [];
  for (let i = 1; i < 46; i++) {
    data.push({
      key: i,
      number: i,
      name: (
        <div>
          <p className="text-sm text-[#303940] font-medium mb-2">Company {i}</p>
        </div>
      ),
      about: (
        <span className="px-3 py-1 text-sm font-medium">
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in...
        </span>
      ),
      year: (
        <span className="px-3 py-1 rounded-md bg-[#4094F726] text-sm font-medium text-[#4094F7]">
          {1990 + i}
        </span>
      ),
    });
  }
  // Tab items
  const items = [
    {
      key: "1",
      label: "Список компаний",
      children: (
        <div className="">
          <div className="m-5 bg-white px-5">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Филиалы компании",
      children: <Filials />,
    },
    {
      key: "3",
      label: "Регионы",
      children: <Regions />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Company;
