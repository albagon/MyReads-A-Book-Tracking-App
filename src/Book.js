import React, { Component } from 'react'

class Book extends Component {
   
  render() {
    let authorsHolder = "";
    if(this.props.book.authors) {authorsHolder = this.props.book.authors.join(', ')};
    let imageHolder = "";
    let hasPropImg = this.props.book.hasOwnProperty('imageLinks');
    if(hasPropImg) {imageHolder = this.props.book.imageLinks.smallThumbnail};
    let currentShelf = "none";
    let hasPropShelf = this.props.book.hasOwnProperty('shelf');
    if(hasPropShelf) {currentShelf = this.props.book.shelf};
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: "url('"+imageHolder+"')" }}></div>
          <div className="book-shelf-changer">
            <select value={currentShelf} onChange={() => this.props.onMoveBook(this.props.book)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none" defaultValue>None</option>
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