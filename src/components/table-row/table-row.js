import React from 'react';
import PropTypes from 'prop-types';
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

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ])
}

export default TableRow;