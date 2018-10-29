import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  /**
   * @description Moves one book to a bookshelf
   * @param {object} book
   */
  moveBook = (book) => {
    this.setState((state) => ({
      books: this.state.books.map((b) => {
        if(b.title === book.title){
          b.shelf = event.target.value
          BooksAPI.update(b, b.shelf)}
        return b;
      })
    }))
  }
  
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks onMoveBook={this.moveBook} books={this.state.books}/>
        )}/>
        <Route exact path="/" render={() => (
          <BookShelves onMoveBook={this.moveBook} books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
