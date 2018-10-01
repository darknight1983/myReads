import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import BookShelf from './bookShelfComp'


export default class BookList extends Component {
  render() {
    const categories = [
      {
        type: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        type: 'wantToRead',
        title: 'Want to Read'
      },
      {
        type: 'read',
        title: 'Read'
      }
    ]
    const { books, updateCategory } = this.props
    return (
      <div className="list-books-content">
        <div>
          {categories.map((category, i) => {
            const shelfBooks = books.filter(book => book.shelf === category.type)
            return <BookShelf
                      key={i}
                      category={category.title}
                      books={shelfBooks}
                      updateCategory={updateCategory}/>
          })}
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateCategory: PropTypes.func.isRequired
}
