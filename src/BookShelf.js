import React, { Component } from 'react'

class BookShelf extends Component {
  changeStatus(e){
    console.log("There was a change of status, change the state of the book")
  }
  
  render() {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: `${book.width}`, height: `${book.height}`, backgroundImage: `url(${book.url})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.status} onChange={this.changeStatus.bind(this)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading" selected>Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default BookShelf
