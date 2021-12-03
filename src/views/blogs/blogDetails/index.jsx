import { useScrollTop } from "hooks";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import saleBanner from "images/sale_banner.png";
import { NavLink } from "react-router-dom";
import NewsCards from "components/news/NewsCards";
import AltFooter from "components/news/AltFooter";
import { newsService } from "services/newsService";
const BlogDetail = (props) => {
  let [newsList, setNewsList] = useState([]);
  let [loading, setLoading] = useState(true);

  useScrollTop();
  const { id } = props.match.params;
  useEffect(() => {
    newsService
      .getNewsList()
      .then((result) => {
        console.log(result.data);
        setNewsList(result.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const newsDetail = newsList.find((item) => item.id == id);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Fragment>
        <main className="blog_detail">
          <div className="blogs">
            <div className="blogs_banner">
              {" "}
              <div className="banner">
                <div className="banner-desc">
                  <h2 className="banner-title">{newsDetail.title}</h2>
                  <p className="news-txt">{newsDetail.descr}</p>
                </div>
                <div className="banner-img">
                  <img src={newsDetail.bannerUrl} alt="banner" />
                </div>
              </div>
            </div>
          </div>

          <div className="main_detail">
            <div className="container">
              <div className="sale_banner ">
                <img src={saleBanner} alt="" />
              </div>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to={`/blogs`}>Blogs</NavLink>
                </li>
                <li className="breadcrumb-item active">{newsDetail.title}</li>
              </ol>
              <div className="main_detail--content">
                <p className="content_desc">{newsDetail.descr}</p>
                <div className="content_img">
                  <img src={newsDetail.mediaURL} alt={newsDetail.title} />
                </div>
                <p className="content-body">{newsDetail.content}</p>
                <div className="content_author">
                  <h4>{newsDetail.author}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="other container">
            <h1 className="other_title">Bài viết khác</h1>
            <div className="other_post ">
              <div className="row">
                {newsList.slice(0, 3).map((news) => {
                  return (
                    <div className="col-md-3 col-sm-12" key={news.id}>
                      <NewsCards {...news} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <AltFooter />
      </Fragment>
    );
  }
};

export default BlogDetail;
