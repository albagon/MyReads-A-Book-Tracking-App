import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
/*import escapeRegExp from 'escape-string-regexp'*/
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    showingBooks : []
  }

  updateQuery = (query) => {
    this.setState({ query: query})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
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
            {this.state.showingBooks instanceof Array &&
              this.state.showingBooks.map((bk) => (
              	<li key={bk.id}>
                	<Book onMoveBook={this.props.onMoveBook} book={bk}/>
              	</li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks