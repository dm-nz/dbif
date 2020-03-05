import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class HouseItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    region: PropTypes.string
  }

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