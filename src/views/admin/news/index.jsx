import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import Search from "antd/lib/transfer/search";
import { newsService } from "services/newsService";
import { history } from "routers/AppRouter";
import { Boundary } from "components/common";
import { useDispatch } from "react-redux";
import { deleteNewsAction } from "redux/actions/newsAction";
import { PlusSquareOutlined } from "@ant-design/icons";

const NewsList = (props) => {
  const dispatch = useDispatch();
  let [newsList, setNewsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newsListSearch, setNewsListSearch] = useState([]);

  useEffect(() => {
    newsService
      .getNewsList()
      .then((res) => {
        setNewsList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setNewsList]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    let results = newsList.filter((news) => {
      return news.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setNewsListSearch(results);
  }, [newsList, searchText]);

  const columns = [
    {
      title: "Mã Tin",
      dataIndex: "id",
      key: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
      value: (text, news) => {
        return <Fragment key={news.id}>{text}</Fragment>;
      },
      // sortDirections: ["descend"],
      sortOder: "descend",
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
    },
    {
      title: "MediaURL",
      dataIndex: "mediaURL",
      key: "mediaURL",
      render: (text, news) => {
        return (
          <Fragment key={news.id}>
            <img src={news.mediaURL} alt={news.title} width={50} height={50} />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Description",
      dataIndex: "descr",
      key: "descr",
      render: (text, news) => {
        return (
          <Fragment key={news.id}>
            {news.descr.length > 50
              ? news.descr.substr(0, 50) + "..."
              : news.descr}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },

    {
      title: "Thao tác",
      dataIndex: "thaoTac",
      key: "thaoTac",
      render: (text, news) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=""
              to={`/admin/news/edit-news/${news.id}`}
            >
              <button className="btn btn-primary mr-2">Edit </button>
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="bg-danger"
              // to={`/admin/news`}
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa phim tin này")) {
                  deleteNewsAction(news.id);
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

  const data = newsListSearch;
  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Boundary>
      <h3 className="mt-5">Quản lý tin tức</h3>
      <Button
        className="mb-2"
        type="primary"
        icon={<PlusSquareOutlined />}
        size="small"
        onClick={() => history.push("/admin/news/add-news")}
      >
        Thêm tin mới
      </Button>
      <Search
        placeholder="input search text"
        id="search"
        name="search"
        value={searchText}
        onChange={handleChange}
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

export default NewsList;
