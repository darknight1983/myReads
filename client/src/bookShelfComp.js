import React from 'react';
import PropTypes from 'prop-types';
import Book from './bookComponent';


export default function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              title={book.title}
              authors={book.authors}
              imageLinks={book.imageLinks}
              changeShelf={props.updateCategory}
              status={book.shelf}
              grabBook={props.grabBook}/>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  category: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}
