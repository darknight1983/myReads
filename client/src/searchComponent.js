import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleRequest = this.handleRequest.bind(this)
  }
  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleRequest(e) {
    if (e.charCode === 13) {
      this.props.findBook(this.state.searchTerm)
    }
  }
  render() {
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
               onKeyPress={this.handleRequest}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}
