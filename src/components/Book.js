import React from 'react'
import PropTypes from 'prop-types'

import BookShelfChanger from './BookShelfChanger'

const Book = (props) => {
    const { book, updateBookShelf } = props

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
        <BookShelfChanger
          bookInShelf={book}
          updateBookShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && book.authors.length && (
        book.authors.map((author, index) => (
        <div key={index} className="book-authors">{author}</div>
      )))}
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func
}

export default Book