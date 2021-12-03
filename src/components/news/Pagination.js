import React from "react";

function Pagination(props) {
  const { newsPerPage, totalNews, paginate } = props;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(totalNews);
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
