import React from 'react'
// import * as BooksAPI from './BooksAPI'
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
    books : [
      {
        "width": 128,
        "height": 193,
        "url": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        "status": "currentlyReading",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee"
      },
      {
        "width": 128,
        "height": 188,
        "url": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        "status": "currentlyReading",
        "title": "Ender's Game",
        "author": "Orson Scott Card"
      },
      {
        "width": 128,
        "height": 193,
        "url": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        "status": "wantToRead",
        "title": "1776",
        "author": "David McCullough"
      },
      {
        "width": 128,
        "height": 192,
        "url": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        "status": "wantToRead",
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling"
      },
      {
        "width": 128,
        "height": 192,
        "url": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        "status": "read",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
      },
      {
        "width": 128,
        "height": 174,
        "url": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
        "status": "read",
        "title": "Oh, the Places You'll Go!",
        "author": "Seuss"
      },
      {
        "width": 128,
        "height": 192,
        "url": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
        "status": "read",
        "title": "The Adventures of Tom Sawyer",
        "author": "Mark Twain"
      }
    ]
  }
  /**
   * @description Moves one book to a bookshelf
   * @param {object} book
   * @param {string} bookShelf
   */
  moveBook = (book) => {
    this.setState((state) => ({
      books: this.state.books.map((b) => {
        b.status = (b.title === book.title) ? (event.target.value) : ( b.status );
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
