import { useDocumentTitle, useScrollTop } from "hooks";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { newsService } from "../../services/newsService";
import RecentPost from "components/news/RecentPost";
import Archive from "components/news/Archive";
import NewsCards from "components/news/NewsCards";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Pagination from "components/news/Pagination";
import { useHomeShowCaseInView } from "hooks";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
  useDocumentTitle("News | NVHTeam");
  useScrollTop();
  let [newsList, setNewsList] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [newsPerPage, setNewsPerPage] = useState(6);
  let [loading, setLoading] = useState(true);
  // const { newsList } = useSelector((state) => {
  //   return state.news;
  // });

  useEffect(() => {
    newsService
      .getNewsList()
      .then((result) => {
        // console.log(result.data);
        setNewsList(result.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const { ref: bannerRef, inView: bannerInView } = useInView({ threshold: 0 });

  const hotNews = newsList.filter((item) => {
    return item.hot == 1;
  });

  //Get current post
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;

  const renderBanner = () => {
    return newsList?.slice(0, 4).map((item) => {
      return (
        <div className="banner" key={item.id}>
          <div className="banner-img">
            <img src={item.bannerUrl} alt="banner" />
          </div>
          <div className="banner-desc">
            <h2 className="banner_title">{item.title}</h2>
            <p className="news-txt">{item.descr}</p>
          </div>
        </div>
      );
    });
  };

  const renderHotNews = () => {
    return hotNews.slice(0, 3).map((item) => {
      return (
        <div className="col-md-4 col-sm-12 hot_news-content" key={item.id}>
          <NavLink to={`/blogs/${item.id}`}>
            <div className="hot_news-img">
              <img src={item.bannerUrl} alt={item.title} />
            </div>
          </NavLink>
          <NavLink to={`/blogs/${item.id}`}>
            <div className="hot_news-title">
              <h3>{item.title}</h3>
            </div>
          </NavLink>
        </div>
      );
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <main className=" blogs_main">
        <div className="blogs">
          <div className="blogs_banner">
            <OwlCarousel
              loop
              autoplay
              autoplaySpeed={3}
              items={1}
              className="banner-carousel owl-carousel owl-theme"
            >
              {renderBanner()}
            </OwlCarousel>
          </div>

          <div className="hot_news">
            <div className="container">
              <h3 className="hot_news-head">Xem nhiều</h3>
              <div className="row">{renderHotNews()}</div>
            </div>
          </div>

          <div className="blog-content">
            <div className="container">
              <div className="row">
                <div className="col-md-4 blog-sidebar">
                  <div className="sidebar-menu">
                    <h3 className="sidebar-title">Recent Post</h3>
                    {newsList.slice(0, 3).map((news) => {
                      return <RecentPost key={news.id} {...news} />;
                    })}
                  </div>
                  <div className="sidebar-archive">
                    <h3 className="sidebar-title">Archive</h3>
                    {newsList.map((news) => {
                      return <Archive key={news.id} {...news} />;
                    })}
                  </div>
                </div>
                <div className="col-md-8 blog_main">
                  <div className="blog_card row">
                    {newsList
                      .slice(indexOfFirstNews, indexOfLastNews)
                      .map((news) => {
                        return (
                          <div className="col-md-6 col-sm-12 " key={news.id}>
                            <NewsCards {...news} />
                          </div>
                        );
                      })}
                  </div>
                  <Pagination
                    newsPerPage={newsPerPage}
                    totalNews={newsList.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Blogs;
