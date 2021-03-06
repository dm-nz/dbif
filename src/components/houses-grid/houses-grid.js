import React from 'react';
import PropTypes from 'prop-types';
import HouseItem from '../house-item';

const HousesGrid = ({items}) => {
  const houses = items.map((item) => {
    const index = item.url.substr(item.url.lastIndexOf('/') + 1);
    return <HouseItem name={item.name} region={item.region} index={index} key={index} />
  })
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {houses}
    </div>
  )
}

HousesGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default HousesGrid;