import React,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class ShelfChanger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'none'
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ value: e.target.value})
    this.props.changeShelf(this.props.book, e.target.value)
  }

  render() {
    const { status } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={status ||this.state.value} onChange={this.handleChange}>
          <option value="#" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
  status: PropTypes.string
}
