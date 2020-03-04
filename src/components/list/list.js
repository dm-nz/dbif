import React from 'react';
import PropTypes from 'prop-types';

const List = ({items}) => {
  if (items) {
    return (
      <ul className="list-unstyled">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  } else return null;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}

export default List;