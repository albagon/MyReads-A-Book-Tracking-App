import React, { Component } from 'react'

class Book extends Component {  
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: `${this.props.book.width}`, height: `${this.props.book.height}`, backgroundImage: `url(${this.props.book.url})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.book.status} onChange={() => this.props.onMoveBook(this.props.book)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author}</div>
     </div>
    )
  }
}

export default Book