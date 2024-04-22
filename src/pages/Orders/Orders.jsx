import React, { useState } from "react";
import { Input, Table, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { MdOutlineChevronLeft } from "react-icons/md";
import { RiFilterFill, RiTableFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";

const Orders = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  // Table columns
  const columns = [
    {
      title: "№",
      dataIndex: "number",
    },
    {
      title: "Клиенты",
      dataIndex: "client",
    },
    {
      title: "Ид.заказа",
      dataIndex: "id",
    },
    {
      title: "Таймер",
      dataIndex: "timer",
    },
    {
      title: "Курьер",
      dataIndex: "courier",
    },
    {
      title: "Филиал",
      dataIndex: "filial",
    },
    {
      title: "Тип доставки",
      dataIndex: "delivery_type",
    },
    {
      title: "Цена заказа",
      dataIndex: "price",
    },
    {
      title: "Адресс клиента",
      dataIndex: "address",
    },
  ];

  // Table data 1
  const data = [];
  for (let i = 1; i < 46; i++) {
    data.push({
      key: i,
      number: i,
      client: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Арсений Морозов</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      id: 5262261,
      timer: (
        <span className="px-3 py-1 rounded-md bg-[#38D9B933] text-sm font-medium text-[#1AC19D]">
          02:33:48
        </span>
      ),
      courier: "-",
      filial: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Арсений Морозов</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      delivery_type: (
        <span className="px-3 py-1 rounded-md bg-[#F8DD4E4D] text-sm font-medium text-[#D29404]">
          Доставка
        </span>
      ),
      price: "$ 888",
      address: `ул. Байкальская‚ д. 52‚ кв. ${i}`,
    });
  }

  const data1 = [];
  for (let i = 1; i < 46; i++) {
    data1.push({
      key: i,
      number: i,
      client: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Вероника Новикова</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      id: 255024,
      timer: (
        <span className="px-3 py-1 rounded-md bg-[#38D9B933] text-sm font-medium text-[#1AC19D]">
          00:02:36
        </span>
      ),
      courier: "-",
      filial: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Вероника Новикова</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      delivery_type: (
        <span className="px-3 py-1 rounded-md bg-[#F8DD4E4D] text-sm font-medium text-[#D29404]">
          Доставка
        </span>
      ),
      price: "500 000 сум",
      address: `Ташкент г. Алмазар р. Янги Алмазар у. ${i}`,
    });
  }

  const data2 = [];
  for (let i = 1; i < 46; i++) {
    data2.push({
      key: i,
      number: i,
      client: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Абдумансуров Абдукаххор</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      id: 9003237,
      timer: (
        <span className="px-3 py-1 rounded-md bg-[#38D9B933] text-sm font-medium text-[#1AC19D]">
          00:02:36
        </span>
      ),
      courier: "-",
      filial: (
        <div>
          <p className="text-sm text-[#303940] mb-2">Абдумансуров Абдукаххор</p>
          <p className="text-sm font-medium text-[#4094F7]">
            +998 (90) 123-45-67
          </p>
        </div>
      ),
      delivery_type: (
        <span className="px-3 py-1 rounded-md bg-[#F8DD4E4D] text-sm font-medium text-[#D29404]">
          Доставка
        </span>
      ),
      price: "1 000 000 сум",
      address: `ул. Бунёдкор, д. 52‚ кв. ${i}`,
    });
  }

  // Tab functions
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  // Tab contents
  const items = [
    {
      key: "1",
      label: "Курьер в пути",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      ),
    },
    {
      key: "2",
      label: "Новый",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data1}
        />
      ),
    },
    {
      key: "3",
      label: "Оператор принял",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data2}
        />
      ),
    },
    {
      key: "4",
      label: "Загатовка",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      ),
    },
    {
      key: "5",
      label: "Завершён",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data1}
        />
      ),
    },
    {
      key: "6",
      label: "Все заказы",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data2}
        />
      ),
    },
  ];

  return (
    <div className="pt-[53px]">
      <div className="fixed top-[56px] w-[95.8%] z-10 flex items-center justify-between bg-white ps-5 py-1 pe-2 border">
        <div className="">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="large size"
            style={{ width: "400px" }}
          />
        </div>
        <div className="flex items-center gap-x-6">
          <div>
            <div className="flex items-center">
              <button className="p-[10px] bg-white border border-[#E9EEF4] rounded-l-md">
                <MdOutlineChevronLeft style={{ color: "#6E8BB7" }} />
              </button>
              <p className="text-sm border-y border-[#E9EEF4] px-3 py-2">
                Сегодня
              </p>
              <button className="p-[10px] bg-white border border-[#E9EEF4] rounded-r-md">
                <MdOutlineChevronLeft
                  style={{ color: "#6E8BB7", rotate: "180deg" }}
                />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3 p-3 cursor-pointer">
            <RiTableFill style={{ fontSize: "20px" }} />
            <span className="text-sm text-[#303940] font-medium">Столбцы</span>
          </div>
          <div className="flex items-center gap-x-3 p-3 cursor-pointer">
            <RiFilterFill style={{ fontSize: "20px" }} />
            <span className="text-sm text-[#303940] font-medium">Фильтр</span>
          </div>
          <div className="flex items-center gap-x-3 p-3 cursor-pointer">
            <HiDownload style={{ fontSize: "20px" }} />
            <span className="text-sm text-[#303940] font-medium">Скачать</span>
          </div>
        </div>
      </div>
      <div className="m-5 bg-white px-5">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Orders;
