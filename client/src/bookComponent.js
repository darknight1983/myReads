import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './shelfChangerComp';


export default class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelfStatus: null
    }


  }

  render() {
    const coverImg = this.props.imageLinks && this.props.imageLinks.smallThumbnail ? this.props.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x193'
    const { book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
            <ShelfChanger changeShelf={this.props.changeShelf} book={book}/>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  authors: PropTypes.array,
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.array.isRequired
}
