import React from 'react';
import Book from './bookComponent';

export default function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
            
        </ol>
      </div>
    </div>
  )
}
