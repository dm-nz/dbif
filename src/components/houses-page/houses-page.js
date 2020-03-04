import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../services/api-service';
import HousesGrid from '../houses-grid';
import HousesFilter from '../houses-filter';
import Pagination from  '../pagination';
import {Redirect} from 'react-router-dom';

export default class HousesPage extends Component {
  static propTypes = {
    pageNum: PropTypes.string
  }

  state = {
    houses: [],
    name: '',
    region: '',
    words: '',
    hasWords: '',
    hasTitles: '',
    hasSeats: '',
    hasDiedOut: '',
    hasAncestralWeapons: '',
    redirect: false,
    isToggleOn: false
  }

  apiService = new ApiService();

  getHouses(pageNum = this.props.pageNum, name = this.state.name, region = this.state.region, words = this.state.words, hasWords = this.state.hasWords, hasTitles = this.state.hasTitles, hasSeats = this.state.hasSeats, hasDiedOut = this.state.hasDiedOut, hasAncestralWeapons = this.state.hasAncestralWeapons) {
    let items = null;
    this.apiService.getHousesList(pageNum, name, region, words, hasWords, hasTitles, hasSeats, hasDiedOut, hasAncestralWeapons)
      .then(data => items = data)
      .then(() => {
        this.setState({
          houses: items
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
    this.getHouses(1, name);
  }

  selectRegion(region) {
    this.updateFilterParams(region);
    this.getHouses(1, this.state.name, region);
  }

  inputWords(words) {
    this.updateFilterParams(words);
    this.getHouses(1, this.state.name, this.state.region, words);
  }

  selectHasWords(hasWords) {
    this.updateFilterParams(hasWords);
    this.getHouses(1, this.state.name, this.state.region, this.state.words, hasWords);
  }

  selectHasTitles(hasTitles) {
    this.updateFilterParams(hasTitles);
    this.getHouses(1, this.state.name, this.state.region, this.state.words, this.state.hasWords, hasTitles);
  }

  selectHasSeats(hasSeats) {
    this.updateFilterParams(hasSeats);
    this.getHouses(1, this.state.name, this.state.region, this.state.words, this.state.hasWords, this.state.hasTitles, hasSeats);
  }

  selectHasDiedOut(hasDiedOut) {
    this.updateFilterParams(hasDiedOut);
    this.getHouses(1, this.state.name, this.state.region, this.state.words, this.state.hasWords, this.state.hasTitles, this.state.hasSeats, hasDiedOut);
  }

  selectHasAncestralWeapons(hasAncestralWeapons) {
    this.updateFilterParams(hasAncestralWeapons);
    this.getHouses(1, this.state.name, this.state.region, this.state.words, this.state.hasWords, this.state.hasTitles, this.state.hasSeats, this.state.hasDiedOut, hasAncestralWeapons);
  }

  resetFilters() {
    this.setState({
      name: '',
      region: '',
      words: '',
      hasWords: '',
      hasTitles: '',
      hasSeats: '',
      hasDiedOut: '',
      hasAncestralWeapons: '',
      redirect: true,
      isToggleOn: false
    })
    this.getHouses(1, '', '', '', '', '', '', '');
  }

  changePage(pageNum) {
    this.getHouses(pageNum)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  toPageOne() {
    if (this.state.redirect) {
      return <Redirect to="/houses/page/1" />
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
    document.title = `Houses — Page ${this.props.pageNum}`;
    if (this.state.redirect) {
      this.setState({redirect: false})
    }
    window.onpopstate = (e) => {
      this.getHouses();
    }
  }

  componentDidMount() {
    this.getHouses();
  }

  render() {
    const {houses} = this.state;
    return (
      <div id="houses-page" className="content container">
        <h1 className="mb-3">Houses</h1>
        {this.toPageOne()}
        <button onClick={() => this.toggleFilters()} className="btn btn-outline-secondary btn-block mb-3 d-lg-none" type="button" data-toggle="collapse" data-target="#sidebar" aria-expanded="false" aria-controls="collapseExample">
          {this.state.isToggleOn ? 'Hide' : 'Show'} filters
        </button>
        <div className="row pt-2">
          <div className="grid col-lg-9 order-2 order-lg-1">
            <HousesGrid items={houses} />
          </div>
          <div id="sidebar" className="collapse uncollapse-lg col-lg-3 order-1 order-lg-2">
            <HousesFilter
              onInputName={(name) => this.inputName(name)}
              onSelectRegion={(region) => this.selectRegion(region)}
              onInputWords={(words) => this.inputWords(words)}
              onSelectHasWords={(hasWords) => this.selectHasWords(hasWords)}
              onSelectHasTitles={(hasTitles) => this.selectHasTitles(hasTitles)}
              onSelectHasSeats={(hasSeats) => this.selectHasSeats(hasSeats)}
              onSelectHasDiedOut={(hasDiedOut) => this.selectHasDiedOut(hasDiedOut)}
              onSelectHasAncestralWeapons={(hasAncestralWeapons) => this.selectHasAncestralWeapons(hasAncestralWeapons)}
              onResetFilters={() => this.resetFilters()}
              redirect={() => (<Redirect to="/houses/page/1" />)}
            />
          </div>
        </div>
        <Pagination section='houses' length={houses.length} currentPage={this.props.pageNum} onChangePage={(pageNum) => this.changePage(pageNum)} />
      </div>
    )
  }
}