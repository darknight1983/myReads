import React from 'react';
import { Link, Route } from 'react-router-dom';
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
    this.searchBookApi = this.searchBookApi.bind(this)
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
  render() {
    const { newBooks, books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            // BookList component goes here
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
