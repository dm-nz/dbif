import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const StartItem = ({image, title, path}) => {
  return (
    <div className="col mb-4">
      <div className="card shadow-sm">
        <Link className="card-body text-center" to={path}>
          <img className="img-fluid mb-3 rounded" src={'/img/' + image + '.png'} srcSet={'/img/' + image + '@2x.png 2x'} alt={title} />
          <h2 className="h4">{title}</h2>
        </Link>
      </div>
    </div>
  )
}

StartItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default StartItem;