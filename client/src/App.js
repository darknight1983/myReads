import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComp from './searchComponent';
import BookList from './bookListComp';
import SingleBook from './singleBookComp';
// import Book from './bookComponent'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      newBooks: [], // Holds books that are added to a shelf.
      singleBook: "No book"
    }
    this.searchBookApi = this.searchBookApi.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
    this.getSingleBook = this.getSingleBook.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateCategory(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      console.log(books)
      window.location.reload();
    })

  }

  searchBookApi(searchTerm) {
    BooksAPI.search(searchTerm).then((books) => {
      if (!books.length) {
        this.setState({ newBooks: []})
      }
      this.setState({ newBooks: books })
    })
    .catch(err => console.log)
  }

  getSingleBook(book) {
    // Find a way to render the singleBook Component from this function
    BooksAPI.get(book.id).then((book) => {
      this.setState({ singleBook: book})
      // Should be using the history object to push a different url
    })
  }
  render() {
    const { newBooks, books, singleBook } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
              books={books}
              updateCategory={this.updateCategory}
              grabBook={this.getSingleBook}/>

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
        <Route path='/book' render={() => (
            singleBook.title ? (
              <SingleBook />
            ) : (
              <h1>You will have to select a book</h1>
            )
          )} />

      </div>
    )
  }
}
export default BooksApp
