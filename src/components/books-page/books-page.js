import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../services/api-service';
import BookItem from '../book-item';
import Pagination from  '../pagination';

export default class BooksPage extends Component {
  static propTypes = {
    pageNum: PropTypes.string
  }

  apiService = new ApiService();

  state = {
    books: [],
    pageNum: this.props.pageNum
  }

  getBooks(pageNum = this.props.pageNum) {
    var items = [];
    this.apiService.getBooksList(pageNum).then(data => items = data).then(() => {
      this.setState({
        books: items
      })
    })
  }

  showBooks() {
    const items = this.state.books.map((item) => {
      const index = item.url.substr(item.url.lastIndexOf('/') + 1);
      return (
        <BookItem title={item.name} index={index} key={item.isbn} />
      )
    })
    return items;
  }

  changePage(pageNum) {
    this.setState({
      pageNum: pageNum
    })
    this.getBooks(pageNum)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  componentDidUpdate() {
    document.title = `Books — Page ${this.props.pageNum}`;
    window.onpopstate = (e) => {
      this.getBooks();
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div id="books-page" className="content container">
        <h1>Books</h1>
        <div className="row mt-4">
          {this.showBooks()}
        </div>
        <Pagination section='books' currentPage={this.props.pageNum} onChangePage={(pageNum) => this.changePage(pageNum)} length={this.state.books.length} />
      </div>
    )
  }
}