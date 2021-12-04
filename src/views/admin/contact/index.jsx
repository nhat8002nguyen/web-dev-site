import Search from "antd/lib/transfer/search";
import { Boundary } from "components/common";
import React, { Fragment, useEffect, useState } from "react";
import { contactService } from "services/contact";
import {
  PlusSquareOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const ContactList = (props) => {
  let [contactList, setContactList] = useState([]);

  useEffect(() => {
    contactService
      .getContactList()
      .then((res) => {
        const contact1 = res.data.filter((contact) => {
          return contact.name != "";
        });
        setContactList(contact1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "Mã Yêu Cầu",
      dataIndex: "id",
      key: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
      value: (text, contact) => {
        return <Fragment key={news.id}>{text}</Fragment>;
      },

      sortOder: "descend",
      width: "10%",
    },
    {
      title: "Tên Khách Hàng",
      dataIndex: "name",
      key: "name",
      width: "10%",
    },
    {
      title: "Mã Khách hàng",
      dataIndex: "client_id",
      key: "clinet_id",

      width: "10%",
    },
    {
      title: "Số DT",
      dataIndex: "phone_number",
      key: "phone_number",

      width: "10%",
    },

    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (text, contact) => {
        return (
          <Fragment key={contact.id}>
            {contact.subject.length > 50
              ? contact.subject.substr(0, 50) + "..."
              : contact.subject}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",

      width: "10%",
    },
    {
      title: "Thao tác",
      dataIndex: "thaoTac",
      key: "thaoTac",
      render: (text, contact) => {
        return (
          <Fragment>
            <NavLink key={1} className="" to={`/admin/contact/${contact.id}`}>
              <button className="btn btn-primary mr-2">Xem </button>
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="bg-danger"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa phim tin này")) {
                  contactService.deleteContact(contact.id);
                  window.location.reload();
                }
              }}
            >
              <button className="btn btn-danger">Delete</button>
            </span>
          </Fragment>
        );
      },
      width: "20%",
    },
  ];

  const data = contactList;
  function onChange(pagination, filters, sorter, extra) {}

  return (
    <Boundary>
      <h3 className="mt-5">Chăm sóc khách hàng</h3>

      <Search
        placeholder="input search text"
        id="search"
        name="search"
        // value={searchText}
        // onChange={handleChange}
        enterButton
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </Boundary>
  );
};

export default ContactList;
