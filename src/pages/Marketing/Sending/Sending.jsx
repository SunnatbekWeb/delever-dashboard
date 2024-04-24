import React from "react";
import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { MdOutlineChevronLeft } from "react-icons/md";
import { RiFilterFill, RiTableFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";

const Sending = () => {
  // Table columns
  const columns = [
    {
      title: "Изображение",
      dataIndex: "image",
    },
    {
      title: "Hазвание на узбекском",
      dataIndex: "nameUz",
    },
    {
      title: "Hазвание на русском",
      dataIndex: "nameRu",
    },
    {
      title: "Статус",
      dataIndex: "status",
    },
  ];

  // Table data 1
  const data = [];
  for (let i = 1; i < 5; i++) {
    data.push({
      key: i,
      number: i,
      image: (
        <img
          src={`https://picsum.photos/id/${i}/80/80`}
          className="rounded-md"
          alt=""
        />
      ),
      nameUz: <span className="px-3 py-1 text-sm font-medium">Banner {i}</span>,
      nameRu: <span className="px-3 py-1 text-sm font-medium">Баннер {i}</span>,
      status: (
        <span className="px-3 py-1 rounded-md bg-[#4094F726] text-sm font-medium text-[#4094F7]">
          Активный
        </span>
      ),
    });
  }
  return (
    <div className="pt-[53px]">
      <div className="fixed top-[56px] w-[83.5%] z-10 flex items-center justify-between bg-white ps-5 py-1 pe-2 border">
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
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Sending;
