import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

function NewsCards(props) {
  const history = useHistory();
  const news = { ...props };
  return (
    <div className="blog_item">
      <NavLink to={`/blogs/${news.id}`}>
        <div className="blog_item-img">
          <img src={news.mediaURL} alt={news.title}></img>
        </div>
      </NavLink>
      <div className="blog_item-content">
        <h3>
          <NavLink to={`/blogs/${news.id}`} className="title">
            {news.title}
          </NavLink>
        </h3>

        <p>{news.descr}</p>
        <ul className="blog-meta">
          <li>By-{news.author}</li>
          <li>{news.date}</li>
        </ul>
      </div>
    </div>
  );
}

export default NewsCards;
