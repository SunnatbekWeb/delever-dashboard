import { Table } from "antd";
import React from "react";

const Regions = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
    },
    {
      title: "Краткое навание",
      dataIndex: "shortName",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Узбекистан",
      shortName: "UZ",
    },
    {
      key: "2",
      name: "Россия",
      shortName: "RU",
    },
  ];
  return (
    <div className="m-5 px-5 bg-white">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Regions;
