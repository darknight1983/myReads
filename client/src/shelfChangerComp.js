import React,{ Component } from 'react';

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
    this.props.changeShelf(this.state.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
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
