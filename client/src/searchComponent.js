import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import { debounce } from 'lodash';

import Book from './bookComponent';

export default class SearchComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleRequest = debounce(this.handleRequest.bind(this), 300)

  }
  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value
    })
    console.log(this.state.searchTerm)
  }
  handleRequest(e) {
    // if (e.charCode === 13) {
    //
    // }
    this.props.findBook(this.state.searchTerm)
  }
  render() {
    const { books, updateCategory } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

              <input
                 type="text"
                 placeholder="Search by title or author"
                 value={this.state.searchTerm}
                 onChange={this.handleSearch}
                 onKeyPress={this.handleRequest}
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
