import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './house-item.css';

export default class HouseItem extends Component {
  state = {
    fallbackSigil: false
  }

  render() {
    const {name, index, region} = this.props;
    let sigil = index;
    if (this.state.fallbackSigil) {
      sigil = 0;
    }
    return (
      <div className="col">
        <Link to={`/houses/${index}`} className="tile">
          <img className="house-sigil img-fluid" src={`/img/houses/thumbnails/${sigil}.png`} onError={() => this.setState({fallbackSigil: true})} alt={name + ' sigil'} />
          <h2 className="h5">{name}</h2>
          {region}
        </Link>
      </div>
    )
  }
}