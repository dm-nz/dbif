import React from 'react';
import {Link} from 'react-router-dom';

const BookItem = ({title, index}) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card mb-4 shadow-sm">
        <Link className="card-body" to={`/books/${index}`}>
          <img className="img-fluid rounded" src={`/img/books/${index}.jpg`} alt={`${title} cover`} />
          <h2 className="h6 sr-only">{title}</h2>
        </Link>
      </div>
    </div>
  )
}

export default BookItem;