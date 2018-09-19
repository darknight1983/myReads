import React from 'react';
import PropTypes from 'prop-types';


export default function Book(props) {

  const coverImg = props.imageLinks && props.imageLinks.smallThumbnail ? props.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x193'
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  )
}
