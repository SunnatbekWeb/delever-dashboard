import React from "react";
import { Button, Input, Table, Tabs } from "antd";
import Regions from "../Regions/Regions";
import Filials from "../Filials/Filials";

const Liko = () => {
  // Table columns
  const columns1 = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Ориентир",
      dataIndex: "target",
    },
    {
      title: "Статус",
      dataIndex: "status",
    },
  ];

  const columns2 = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Описание",
      dataIndex: "title",
    },
    {
      title: "Статус",
      dataIndex: "status",
    },
  ];

  // Table data 1
  const data1 = [];
  for (let i = 1; i < 46; i++) {
    data1.push({
      key: i,
      number: i,
      name: (
        <div>
          <p className="text-sm text-[#303940] font-medium mb-2">Company {i}</p>
        </div>
      ),
      target: (
        <span className="px-3 py-1 text-sm font-medium">
          850{i} Preston Rd. Inglewood, Maine 9838{i}
        </span>
      ),
      status: (
        <span className="px-3 py-1 rounded-md bg-[#F8DD4E4D] text-sm font-medium text-[#D29404]">
          Не доступен
        </span>
      ),
    });
  }
  // Table data 1
  const data2 = [];
  for (let i = 1; i < 46; i++) {
    data2.push({
      key: i,
      number: i,
      name: (
        <div>
          <p className="text-sm text-[#303940] font-medium mb-2">
            Parturient Venenatis Etiam {i}
          </p>
        </div>
      ),
      title: (
        <span className="px-3 py-1 text-sm font-medium">
          Magnis urna lacus lectus leo aliquam id semper. Lacinia pellentesque
          metus, in enim...
        </span>
      ),
      status: (
        <span className="px-3 py-1 rounded-md bg-[#1AC19D26] text-sm font-medium text-[#1AC19D]">
          Не доступен
        </span>
      ),
    });
  }

  // Tab items
  const items = [
    {
      key: "1",
      label: "Ролномочия",
      children: (
        <div className="m-5 bg-white p-5 rounded-md">
          <p>АПИ логин</p>
          <Input placeholder="Basic usage" style={{ margin: "8px 0 16px 0" }} />
          <Button type="primary">Сохранить</Button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Филиалы",
      children: (
        <div className="m-5 bg-white px-5">
          <Table columns={columns1} dataSource={data1} />
        </div>
      ),
    },
    {
      key: "3",
      label: "Товары",
      children: (
        <div className="m-5 bg-white px-5">
          <Table columns={columns2} dataSource={data2} />
        </div>
      ),
    },
    {
      key: "4",
      label: "Терминал",
      children: (
        <div className="m-5 bg-white px-5">
          <Table columns={columns1} dataSource={data1} />
        </div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Liko;
