import React, {Component} from 'react';
import ApiService from '../../services/api-service';
import CharactersGrid from '../characters-grid';
import Pagination from  '../pagination';
import CharactersFilter from '../characters-filter';
import {Redirect} from "react-router-dom";

export default class CharactersPage extends Component {
  state = {
    characters: [],
    name: '',
    gender: '',
    culture: '',
    isAlive: '',
    redirect: false,
    isToggleOn: false
  }

  apiService = new ApiService();  

  getCharacters(pageNum = this.props.pageNum, name = this.state.name, gender = this.state.gender, culture = this.state.culture, isAlive = this.state.isAlive) {
    let items = null;
    this.apiService.getCharactersList(pageNum, name, gender, culture, isAlive)
      .then(data => items = data)
      .then(() => {
        this.setState({
          characters: items
        })
      })
  }

  updateFilterParams(param) {
    this.setState({
      [param]: param,
      redirect: true
    })
  }

  inputName(name) {
    this.updateFilterParams(name);
    this.getCharacters(1, name);
  }

  selectGender(gender) {
    this.updateFilterParams(gender);
    this.getCharacters(1, this.state.name, gender);
  }

  selectCulture(culture) {
    this.updateFilterParams(culture);
    this.getCharacters(1, this.state.name, this.state.gender, culture);
  }

  selectAlive(isAlive) {
    this.updateFilterParams(isAlive);
    this.getCharacters(1, this.state.name, this.state.gender, this.state.culture, isAlive);
  }

  resetFilters() {
    this.setState({
      name: '',
      gender: '',
      culture: '',
      isAlive: '',
      redirect: true,
    });
    this.getCharacters(1, '', '', '', '');
  }

  changePage(pageNum) {
    this.getCharacters(pageNum)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  toPageOne() {
    if (this.state.redirect) {
      return <Redirect to="/characters/page/1" />
    }
  }

  toggleFilters() {
    if (this.state.isToggleOn) {
      this.setState({
        isToggleOn: false
      })
    } else {
      this.setState({
        isToggleOn: true
      })
    }
  }

  componentDidUpdate() {
    document.title = `Characters — Page ${this.props.pageNum}`;
    if (this.state.redirect) {
      this.setState({redirect: false})
    }
    window.onpopstate = (e) => {
      this.getCharacters();
    }
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const {characters} = this.state;
    return (
      <div id="characters-page" className="content container">
        <h1 className="mb-3">Characters</h1>
        {this.toPageOne()}
        <button onClick={() => this.toggleFilters()} className="btn btn-outline-secondary btn-block mb-3 d-lg-none" type="button" data-toggle="collapse" data-target="#sidebar" aria-expanded="false" aria-controls="collapseExample">
          {this.state.isToggleOn ? 'Hide' : 'Show'} filters
        </button>
        <div className="row pt-2">
          <div className="col-lg-9 order-2 order-lg-1">
            <CharactersGrid items={characters} />
          </div>
          <div id="sidebar" className="collapse uncollapse-lg col-lg-3 order-1 order-lg-2">
            <CharactersFilter
              onInputName={(name) => this.inputName(name)}
              onSelectGender={(gender) => this.selectGender(gender)}
              onSelectCulture={(culture) => this.selectCulture(culture)}
              onSelectAlive={(isAlive) => this.selectAlive(isAlive)}
              onResetFilters={() => this.resetFilters()}
              redirect={() => (<Redirect to="/characters/page/1" />)}
            />
          </div>
        </div>
        <Pagination section='characters' currentPage={this.props.pageNum} onChangePage={(pageNum) => this.changePage(pageNum)} length={characters.length} />
      </div>
    )
  }
}