import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './character-item.css';
import List from '../list';

const CharacterItem = ({name, index, aliases, titles}) => {
  const subHeader = (name && aliases[0] !== '') ? (
    <List items={aliases} />
    ) : (
      (titles[0] !== '') ? (
        <List items={titles} />
      ) : null
    )
  return (
    <div className="col mb-4">
      <Link to={`/characters/${index}`} className="tile">
        <h2 className="h5">{name ? name : aliases[0]}</h2>
        {subHeader}
      </Link>
    </div>
  )
}

CharacterItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.string.isRequired,
  aliases: PropTypes.array,
  titles: PropTypes.array,
}

export default CharacterItem;