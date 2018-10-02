import React from 'react';
import { Link, Route } from 'react-router-dom';
import { debounce } from 'lodash';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComp from './searchComponent';
import BookList from './bookListComp';
// import Book from './bookComponent'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      newBooks: [] // Holds books that are added to a shelf.
    }
    this.searchBookApi = debounce(this.searchBookApi.bind(this), 300)
    this.updateCategory = this.updateCategory.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateCategory(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      console.log(books)
      // Not optimal for performance. Will re-factor soon.
      BooksAPI.getAll().then(newList => this.setState({ books: newList }))
    })

  }


  searchBookApi(searchTerm) {
    const { books } = this.state;
    if (!searchTerm) return;
    BooksAPI.search(searchTerm.trim()).then((matchedBooks) => {
      if (!matchedBooks.length) {
        this.setState({ newBooks: []})
      }

      // Compare bookshelf books to results to update shelf status
      let filtered = matchedBooks.map((book) => {
        book.shelf = 'none'
        books.forEach(item => {
          if (book.id === item.id) {
            book.shelf = item.shelf;
          }
        })
        return book;
      })
      this.setState({ newBooks: filtered })
    })
    .catch(err => console.log)
  }
  render() {
    const { newBooks, books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
              books={books}
              updateCategory={this.updateCategory}/>

            <div className="open-search">
              <Link to='/search'>Add a Book</Link>
            </div>

          </div>
          )}/>

        <Route path="/Search" render={() => (
            <SearchComp
              findBook={this.searchBookApi}
              books={ newBooks }
              updateCategory={this.updateCategory}/>
          )} />

      </div>
    )
  }
}
export default BooksApp
