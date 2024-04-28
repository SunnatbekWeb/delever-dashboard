import { Table } from "antd";
import React from "react";

const Filials = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
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
          <p className="text-sm text-[#303940] font-medium mb-2">Filial {i}</p>
        </div>
      ),
      year: <span className="px-3 py-1 text-sm font-medium">{1990 + i}</span>,
    });
  }
  return (
    <div className="m-5 px-5 bg-white">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Filials;
