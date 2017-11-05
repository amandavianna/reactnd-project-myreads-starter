import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Bookshelf from './Bookshelf'
import shelves from './../utils/shelves'

const ListBooks = ({ books, updateBookShelf }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {shelves.map(shelf => (
        <Bookshelf
          key={shelf.type}
          title={shelf.title}
          groupBooks={books.filter(book => book.shelf === shelf.type)}
          updateBookShelf={updateBookShelf}
        />
      ))}
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
)

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func
}

export default ListBooks