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

  /*async fetchSearch(query){
    let showingBooks = []
    showingBooks = await BooksAPI.search(query, 20).then(books => console.log(books)).catch(error => {console.log(error)})
    return showingBooks
  }*/
 componentDidMount(){
    if (this.state.query) {
      console.log(this.state.query)
      
      /*const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))*/
      this.setState({showingBooks : BooksAPI.search(this.state.query, 20).then(books => console.log(books)).catch(error => {console.log(error)})})
      /*TODO: Add idle time here because the promise is not resolved on time*/
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
            {console.log(this.state.showingBooks)}
            {this.state.showingBooks.map((book) => (
              <li key={book.id}>
                <Book onMoveBook={this.props.onMoveBook} book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks