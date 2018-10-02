import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Book from './bookComponent';

export default class SearchComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearch = this.handleSearch.bind(this)

  }
  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value
    })
    this.props.findBook(e.target.value)
  }
  handleRequest(e) {
    this.props.findBook(this.state.searchTerm)
  }
  render() {
    const { books, updateCategory } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
              <input
                 type="text"
                 placeholder="Search by title or author"
                 value={this.state.searchTerm}
                 onChange={this.handleSearch}

                 />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length > 0 ? books.map(book => (
              <Book
                key={book.id}
                book={book}
                title={book.title}
                authors={book.authors}
                imageLinks={book.imageLinks}
                status={book.shelf}
                changeShelf={updateCategory}/>
            )) : <li>No books available</li>}

          </ol>
        </div>
      </div>
    )
  }
}

SearchComp.propTypes = {
  findBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}
