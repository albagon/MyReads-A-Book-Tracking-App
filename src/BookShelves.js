import React, { Component } from 'react'
import Book from './Book'

class BookShelves extends Component {
  render() {
    return (
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
				<div className="bookshelf">
    				<h2 className="bookshelf-title">Currently Reading</h2>
      				<div className="bookshelf-books">
       					<ol className="books-grid">
         					{this.props.books.filter((b) => b.shelf === "currentlyReading").map((bk) => (
              					<li key={bk.id}>
                					<Book onMoveBook={this.props.onMoveBook} book={bk}/>
              					</li>
    						))}
          				</ol>
      				</div>
     			</div>
				<div className="bookshelf">
    				<h2 className="bookshelf-title">Want to Read</h2>
      				<div className="bookshelf-books">
       					<ol className="books-grid">
         					{this.props.books.filter((b) => b.shelf === "wantToRead").map((bk) => (
              					<li key={bk.id}>
                					<Book onMoveBook={this.props.onMoveBook} book={bk}/>
              					</li>
            				))}
          				</ol>
      				</div>
     			</div>
				<div className="bookshelf">
    				<h2 className="bookshelf-title">Read</h2>
      				<div className="bookshelf-books">
       					<ol className="books-grid">
         					{this.props.books.filter((b) => b.shelf === "read").map((bk) => (
              					<li key={bk.id}>
                					<Book onMoveBook={this.props.onMoveBook} book={bk}/>
              					</li>
            				))}
          				</ol>
      				</div>
     			</div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.props.onSearch()}>Add a book</a>
            </div>
    	</div>
    )
  }
}

export default BookShelves
