import React from 'react';
import PropTypes from 'prop-types';

const LinkedList = ({items}) => {
  if (Array.isArray(items)) {
    return (
      <ul className="list-unstyled">
        {items.map(item => <li key={item.name}><a href={`/${item.id}`}>{item.name}</a></li>)}
      </ul>
    )
  } else {
    return (
      <a href={`/${items.id}`}>{items.name}</a>
    )
  }
}

LinkedList.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
      })
    )
  ])
}

export default LinkedList;