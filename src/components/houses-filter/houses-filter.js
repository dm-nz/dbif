import React, {Component} from 'react';

export default class HousesFilter extends Component {
  state = {
    changed: false
  }

  resetFilters() {
    document.getElementById('houses-filter').reset();
    this.setState({
      changed: false
    })
  }

  render() {
    return (
      <form id="houses-filter" className="mb-4" onChange={() => {this.props.redirect(); this.setState({changed: true})}}>
        <h2 className="h5 mb-3 d-none d-lg-block">Filters</h2>
        <input id="name-input" type="text" className="form-control mb-3" placeholder="Name" aria-label="Name" onChange={(e) => this.props.onInputName(e.target.value)} />
        <div className="input-group mb-3">
          <select id="region-select" className="custom-select pb3" onChange={(e) => this.props.onSelectRegion(e.target.value)}>
            <option value="" defaultValue>Region</option>
            <option value="the crownlands">The Crownlands</option>
            <option value="dorne">Dorne</option>
            <option value="iron islands">Iron Islands</option>
            <option value="the neck">The Neck</option>
            <option value="the north">The North</option>
            <option value="the reach">The Reach</option>
            <option value="the riverlands">The Riverlands</option>
            <option value="the stormlands">The Stormlands</option>
            <option value="the vale">The Vale</option>
            <option value="the westerlands">The Westerlands</option>
          </select>
        </div>
        <input id="words-input" type="text" className="form-control mb-3" placeholder="Words" aria-label="Name" onChange={(e) => this.props.onInputWords(e.target.value)} />
        <div className="input-group mb-3">
          <select id="haswords-select" className="custom-select" onChange={(e) => this.props.onSelectHasWords(e.target.value)}>
            <option value="" defaultValue>Has words?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="hastitles-select" className="custom-select" onChange={(e) => this.props.onSelectHasTitles(e.target.value)}>
            <option value="" defaultValue>Has titles?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="hasseats-select" className="custom-select" onChange={(e) => this.props.onSelectHasSeats(e.target.value)}>
            <option value="" defaultValue>Has seats?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="hasdiedout-select" className="custom-select" onChange={(e) => this.props.onSelectHasDiedOut(e.target.value)}>
            <option value="" defaultValue>Has died out?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="hasancestralweapons-select" className="custom-select" onChange={(e) => this.props.onSelectHasAncestralWeapons(e.target.value)}>
            <option value="" defaultValue>Has ancestral weapons?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {this.state.changed ? (
          <button
            className="btn btn-secondary btn-sm btn-block"
            onClick={(e) => {e.preventDefault(); this.resetFilters(); this.props.onResetFilters()}}>
              Reset
          </button>
        ) : null}
      </form>
    )
  }
}