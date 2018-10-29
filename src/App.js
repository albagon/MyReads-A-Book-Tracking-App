import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
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
    showSearchPage: false,
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
  /**
   * @description Open the search page
   */
  openSearch = () => {
    this.setState({ showSearchPage: true })
  }
  /**
   * @description Close the search page
   */
  closeSearch = () => {
    this.setState({ showSearchPage: false })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onMoveBook={this.moveBook} onGoToShelves={this.closeSearch} books={this.state.books}/>
        ) : (
          <BookShelves onMoveBook={this.moveBook} onSearch={this.openSearch} books={this.state.books}/>
        )}
      </div>
    )
  }
}

export default BooksApp
