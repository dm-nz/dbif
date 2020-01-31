import React, {Component} from 'react';

export default class CharactersFilter extends Component {
  state = {
    changed: false
  }

  resetFilters() {
    document.getElementById('characters-filter').reset();
    this.setState({
      changed: false
    })
  }

  render() {
    return (
      <form id="characters-filter" className="mb-4" onChange={() => {this.props.redirect(); this.setState({changed: true})}}>
        <h2 className="h5 mb-3 d-none d-lg-block">Filters</h2>
        <input id="name-input" type="text" className="form-control mb-3" placeholder="Name" aria-label="Name" onChange={(e) => this.props.onInputName(e.target.value)} />
        <div className="input-group mb-3">
          <select id="gender-select" className="custom-select pb3" onChange={(e) => this.props.onSelectGender(e.target.value)}>
            <option value="" defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="culture-select" className="custom-select" onChange={(e) => this.props.onSelectCulture(e.target.value)}>
            <option value="" defaultValue>Culture</option>
            <option value="andal">Andal</option>
            <option value="asshai">Asshai</option>
            <option value="braavosi">Braavosi</option>
            <option value="crannogmen">Crannogmen</option>
            <option value="dornish">Dornish</option>
            <option value="dothraki">Dothraki</option>
            <option value="free folk">Free folk</option>
            <option value="ironborn">Ironborn</option>
            <option value="lhazareen">Lhazareen</option>
            <option value="lysene">Lysene</option>
            <option value="mountain clans">Mountain clans</option>
            <option value="northmen">Northmen</option>
            <option value="norvoshi">Norvoshi</option>
            <option value="pentoshi">Pentoshi</option>
            <option value="qartheen">Qartheen</option>
            <option value="reach">Reach</option>
            <option value="rivermen">Rivermen</option>
            <option value="stormlands">Stormlands</option>
            <option value="summer isles">Summer Isles</option>
            <option value="valemen">Valemen</option>
            <option value="valyrian">Valyrian</option>
            <option value="westerman">Westerman</option>
            <option value="westeros">Westeros</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select id="alive-select" className="custom-select" onChange={(e) => this.props.onSelectAlive(e.target.value)}>
            <option value="" defaultValue>Alive or dead</option>
            <option value="true">Alive</option>
            <option value="false">Dead</option>
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