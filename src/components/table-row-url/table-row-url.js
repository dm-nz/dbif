import React from 'react';
import LinkedList from '../linked-list';

const TableRowUrl = ({label, value}) => {
  if (!value) {
    return null
  }
  if (Array.isArray(value)) {
    if (!value.length || value[0] === '') {
      return null
    }
  }
  return (
    <tr>
      <td>{label}</td>
      <td><LinkedList items={value} /></td>
    </tr>
  )
}

export default TableRowUrl;