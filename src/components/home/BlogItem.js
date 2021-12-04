import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { blogs } from "./BlogData";

export default function BlogItem(props) {
  const { mediaURL, title, content, author, id } = props;
  return (
    <NavLink to={`/blogs/${id}`}>
      {" "}
      <div className="product-display blog-display">
        <div className="product-display-img">
          <img src={mediaURL} alt=""></img>
        </div>
        <div className="product-display-details">
          <h3 className="blog-link">
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </h3>
          <p className="text-subtle" id="blog-detail">
            {content.length > 100 ? content.substring(0, 100) + "..." : content}
          </p>
          <p className="blog-link">Read More</p>
          <p
            className="text-subtle"
            style={{ fontSize: 12 }}
          >{`By - ${author}`}</p>
        </div>
      </div>
    </NavLink>
  );
}
