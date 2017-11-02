import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const { books } = this.props

    const shelves = [
      { type: "currentlyReading", title: "Currently Reading", groupBooks: [] },
      { type: "wantToRead", title: "Want to Read", groupBooks: [] },
      { type: "read", title: "Read", groupBooks: [] }
    ]

    shelves.map(shelf =>
      shelf.groupBooks = books.filter(book => book.shelf === shelf.type)
    )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) =>
            (shelf.groupBooks.length < 0) ? null :
              <Bookshelf
                key={index}
                title={shelf.title}
                groupBooks={shelf.groupBooks}
              />
            )
          }
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks