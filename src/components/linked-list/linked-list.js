import React from 'react';

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

export default LinkedList;