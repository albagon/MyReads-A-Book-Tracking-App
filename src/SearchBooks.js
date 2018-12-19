import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
/*import escapeRegExp from 'escape-string-regexp'*/
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      // If there was a change in the query then search it and update the showing books with the result
      BooksAPI.search(this.state.query, 20)
      .then(books => {
        this.setState({ showingBooks: books })
      })
      .catch(error => {console.log(error);})
    }
  }

  render() {   
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {// If the API returned an array, then check if the books are in a shelf
             this.state.showingBooks instanceof Array &&
               this.state.showingBooks.map((bk) => {
                 let inShelfBook;
                 this.props.books.forEach((boo, index) => {
                   //console.log('id of shelf='+boo.id+' id of search='+bk.id);
                   console.log('hello');
                   inShelfBook = boo.id === bk.id ? 
                     <li key={boo.id}>IN THE SHELF
                       <Book onMoveBook={this.props.onMoveBook} book={this.props.books[index]}/>
                     </li> : 
                     <li key={bk.id}>
                       <Book onMoveBook={this.props.onMoveBook} book={bk}/>
                     </li>
                 });
                 //console.log(inShelfBook);
                 return (
                   inShelfBook 
                 );
               })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks