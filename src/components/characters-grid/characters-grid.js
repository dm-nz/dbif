import React from 'react';
import CharacterItem from '../character-item';

const CharactersGrid = ({items}) => {
  const characters = items.map((item) => {
    const index = item.url.substr(item.url.lastIndexOf('/') + 1);
    return <CharacterItem name={item.name} aliases={item.aliases} titles={item.titles} index={index} key={index} />
  })
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {characters}
    </div>
  )
}

export default CharactersGrid;