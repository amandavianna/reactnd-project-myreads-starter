import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Bookshelf = (props) => {
  const { title, groupBooks } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {groupBooks.map(book => (
            <li key={book.id}>
              <Book
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  groupBooks: PropTypes.array.isRequired
}

export default Bookshelf