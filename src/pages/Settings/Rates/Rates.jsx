import { Table, Tabs } from "antd";
import React from "react";

const Rates = () => {
  const columns1 = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Базовая цена",
      dataIndex: "price",
    },
  ];

  const columns2 = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Базовая цена",
      dataIndex: "price",
    },
    {
      title: "Включенные километры",
      dataIndex: "km",
    },
    {
      title: "Далее сумма за км",
      dataIndex: "priceKm",
    },
  ];

  // Table data 1
  const data1 = [];
  for (let i = 1; i < 16; i++) {
    data1.push({
      key: i,
      number: i,
      name: (
        <div>
          <p className="text-sm text-[#303940] font-medium mb-2">Тариф {i}</p>
        </div>
      ),
      price: <span className="px-3 py-1 text-sm font-medium">50 000 сум</span>,
    });
  }

  const data2 = [];
  for (let i = 1; i < 16; i++) {
    data2.push({
      key: i,
      number: i,
      name: (
        <div>
          <p className="text-sm text-[#303940] font-medium mb-2">Тариф {i}</p>
        </div>
      ),
      price: <span className="px-3 py-1 text-sm font-medium">50 000 сум</span>,
      km: <span className="px-3 py-1 text-sm font-medium">5 км</span>,
      priceKm: <span className="px-3 py-1 text-sm font-medium">50 000 сум</span>,
    });
  }

  const items = [
    {
      key: "1",
      label: "Фиксированная",
      children: (
        <div className="">
          <div className="m-5 bg-white px-5">
            <Table columns={columns1} dataSource={data1} />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "По километру",
      children: (
        <div className="">
          <div className="m-5 bg-white px-5">
            <Table columns={columns2} dataSource={data2} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default Rates;
