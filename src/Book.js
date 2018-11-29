import React, { Component } from 'react'

class Book extends Component {  
  render() {
    let authorsHolder = "";
    if(this.props.book.authors) {authorsHolder = this.props.book.authors.join(', ')};
    let imageHolder = "";
    if(this.props.book.imageLinks.smallThumbnail) {imageHolder = this.props.book.imageLinks.smallThumbnail};
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: "url('"+imageHolder+"')" }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={() => this.props.onMoveBook(this.props.book)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authorsHolder}</div>
     </div>
    )
  }
}

export default Book