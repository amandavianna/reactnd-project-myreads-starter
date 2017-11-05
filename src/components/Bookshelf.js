import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Bookshelf = ({ title, groupBooks, updateBookShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {groupBooks.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              updateBookShelf={updateBookShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  groupBooks: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func
}

export default Bookshelf