import React from 'react';
import Book from './bookComponent';

export default function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book
              title={book.title}
              authors={book.authors}
              imageLinks={book.imageLinks}/>
          ))}
        </ol>
      </div>
    </div>
  )
}
