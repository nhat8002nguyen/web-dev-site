import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

function Archive(props) {
  const history = useHistory();
  const { mediaURL, title, content, id } = props;
  return (
    <NavLink to={`/blogs/${id}`} className="archive_title">
      <h4>{title}</h4>
    </NavLink>
  );
}

export default Archive;
