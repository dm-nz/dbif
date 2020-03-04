import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../services/api-service';
import Moment from 'react-moment';
import TableRow from '../table-row';
import TableRowUrl from '../table-row-url';
import Error from '../error';
import './item-details.css';

export default class ItemDetails extends Component {
  static propTypes = {
    itemId: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired
  }

  apiService = new ApiService();

  state = {
    data: [],
    hasImage: true,
    hasError: false
  }

  singleUrltoLink(obj, key) {
    if (obj[key]) {
      this.apiService.urlToLink(obj[key])
        .then(data => {
          obj[key] = data;
          this.setState({
            data: obj
          })
        })
    }
  }

  multipleUrlsToLink(obj, key) {
    if (obj[key]) {
      let arr = [];
      obj[key].forEach((item) => {
        this.apiService.urlToLink(item)
        .then(data => arr.push(data))
        .then(() => {
          obj[key] = arr;
        })
        .then(() => {
          this.setState({
            data: obj
          })
        })
      })
    }
  }

  getDetails() {
    let items = [];
    this.apiService.getDetails(this.props.section, this.props.itemId)
      .then(data => items = data)
      .then(() => {
        this.setState({
          data: items
        })
      })
      .then(() => {
        this.multipleUrlsToLink(items, 'povCharacters');
        this.singleUrltoLink(items, 'father');
        this.singleUrltoLink(items, 'mother');
        this.singleUrltoLink(items, 'spouse');
        this.multipleUrlsToLink(items, 'allegiances');
        this.multipleUrlsToLink(items, 'books');
        this.multipleUrlsToLink(items, 'povBooks');
        this.singleUrltoLink(items, 'currentLord');
        this.singleUrltoLink(items, 'heir');
        this.singleUrltoLink(items, 'overlord');
        this.singleUrltoLink(items, 'founder');
        this.multipleUrlsToLink(items, 'cadetBranches');
        this.multipleUrlsToLink(items, 'swornMembers');
      })
      .catch(() => {
        this.setState({
          hasError: true
        })
      })
  }

  noImage() {
    this.setState({
      hasImage: false
    })
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    const {data, hasImage, hasError} = this.state;
    const {section, itemId, imageType='jpg'} = this.props;
    let released = null;
    if (data.released) {
      released = <Moment format="MMMM DD, YYYY">{data.released}</Moment>;
    }
    document.title = data.name;
    if (hasError) return <Error />;
    return (
      <div id="item-details" className="content container">
        <div className="row">
        {hasImage ? (
          <div className="col-md-3">
            <img onError={() => this.noImage()} src={`/img/${section}/${itemId}.${imageType}`} alt={data.name} className="img-fluid mb-4" />
          </div>
        ) : null}
          <div className="col">
            <h1 className="details-title mb-4">{data.name}</h1>
            <table className="table">
              <tbody>
                <TableRow label='ISBN' value={data.isbn} />
                <TableRow label='Authors' value={data.authors} />
                <TableRow label='Number of pages' value={data.numberOfPages} />
                <TableRow label='Publisher' value={data.publisher} />
                <TableRow label='Country' value={data.country} />
                <TableRow label='Media type' value={data.mediaType} />
                <TableRow label='Released' value={released} />
                <TableRowUrl label='POV characters' value={data.povCharacters} />
                <TableRow label='Region' value={data.region} />
                <TableRow label='Coat of arms' value={data.coatOfArms} />
                <TableRow label='Words' value={data.words} />
                <TableRow label='Gender' value={data.gender} />
                <TableRow label='Culture' value={data.culture} />
                <TableRow label='Born' value={data.born} />
                <TableRow label='Died' value={data.died} />
                <TableRow label='Titles' value={data.titles} />
                <TableRow label='Aliases' value={data.aliases} />
                <TableRowUrl label='Father' value={data.father} />
                <TableRowUrl label='Mother' value={data.mother} />
                <TableRowUrl label='Spouse' value={data.spouse} />
                <TableRowUrl label='Allegiances' value={data.allegiances} />
                <TableRowUrl label='Books' value={data.books} />
                <TableRowUrl label='POV books' value={data.povBooks} />
                <TableRow label='TV series' value={data.tvSeries} />
                <TableRow label='Played by' value={data.playedBy} />
                <TableRow label='Seats' value={data.seats} />
                <TableRowUrl label='Current lord' value={data.currentLord} />
                <TableRowUrl label='Heir' value={data.heir} />
                <TableRowUrl label='Overlord' value={data.overlord} />
                <TableRow label='Founded' value={data.founded} />
                <TableRowUrl label='Founder' value={data.founder} />
                <TableRow label='Died out' value={data.diedOut} />
                <TableRow label='Ancestral weapons' value={data.ancestralWeapons} />
                <TableRowUrl label='Cadet branches' value={data.cadetBranches} />
                <TableRowUrl label='Sworn members' value={data.swornMembers} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}