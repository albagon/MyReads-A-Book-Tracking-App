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
    let newBooks = this.state.books;
    let indexBookFound = null;
    // Is the book in the state?
    let foundBook = this.state.books.find((b, i) => {
      indexBookFound = i;
      console.log(indexBookFound);
      return b.id === book.id;
    });

    // If the book we are moving already exists in the state
    if(foundBook) {
      let newShelf = '';
      this.setState((state) => ({
        books: this.state.books.map((b) => {
          newShelf = event.target.value;
          console.log('newShelf is '+newShelf);
          if(b.id === book.id){
            b.shelf = event.target.value;
            BooksAPI.update(b, b.shelf).catch(error => {console.log(error);});
          }
          return b;
        }).filter(b => b.shelf !== 'none') //end of map and filter
      })) // end of setState
    } else {
      newBooks.push(book);
      BooksAPI.update(book, event.target.value)
      .then(response => {this.setState((state) => ({ books: newBooks}))})
      .catch(error => {console.log(error);})
      
      // print list of books in shelves
      console.log(this.state.books);
    }
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
