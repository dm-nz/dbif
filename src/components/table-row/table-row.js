import React from 'react';
import List from '../list';

const TableRow = ({label, value}) => {
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
      <td>{Array.isArray(value) ? <List items={value} /> : value}</td>
    </tr>
  )
}

export default TableRow;