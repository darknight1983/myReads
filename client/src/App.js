import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComp from './searchComponent';
import BookShelf from './bookShelfComp';
import Book from './bookComponent'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      newBooks: [], // Holds books that are added to a shelf.
      categories: ['Currently Reading', 'Want to Read', 'Read']
    }
    this.searchBookApi = this.searchBookApi.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => (
      this.setState({ books })
    ))
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
    const { newBooks, categories, books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {categories.map((category, i) => (
                  <BookShelf
                    category={category}
                    key={i}
                    books={books}/>
                ))}

              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a Book</Link>
            </div>

          </div>
          )}/>

        <Route path="/Search" render={() => (
            <SearchComp
              findBook={this.searchBookApi}
              books={ newBooks }/>
          )} />

      </div>
    )
  }
}
export default BooksApp
