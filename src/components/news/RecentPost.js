import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

function RecentPost(props) {
  const history = useHistory();
  const { mediaURL, title, content, id } = props;

  return (
    <div className="row mt-4">
      <NavLink to={`/blogs/${id}`} className="post_img col-md-4">
        <img src={mediaURL}></img>
      </NavLink>
      <div className="post_text col-md-8">
        <NavLink to={`/blogs/${id}`} className="post_title">
          <h4>{title}</h4>
        </NavLink>
        <div className="post_content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
