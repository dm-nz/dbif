import React from 'react';

const List = ({items}) => {
  if (items) {
    return (
      <ul className="list-unstyled">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  } else return null;
}

export default List;