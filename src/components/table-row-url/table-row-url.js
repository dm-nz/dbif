import React from 'react';
import PropTypes from 'prop-types';
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

TableRowUrl.propTypes = {
  value: PropTypes.oneOfType([
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

export default TableRowUrl;