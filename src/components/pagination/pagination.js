import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({currentPage, onChangePage, section, length}) => {
  const prevPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
      {(prevPage > 0 && length > 0) ? (
        <li className="page-item">
          <Link className="page-link" to={`/${section}/page/${prevPage}`} onClick={() => onChangePage(prevPage)}>Previous</Link>
        </li>
      ) : null}
      {(length === 48) ? (
        <li className="page-item">
          <Link className="page-link" to={`/${section}/page/${nextPage}`} onClick={() => onChangePage(nextPage)}>Next</Link>
        </li>
      ) : null}
      </ul>
    </nav>
  )
}

export default Pagination;