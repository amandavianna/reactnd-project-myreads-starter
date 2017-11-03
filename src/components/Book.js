import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  state = {
    coverHeight: 0,
    coverWidth: 0
  }

  loadBookCover(bookCover) {
    let bookImage = new Image()
    bookImage.src = bookCover

    bookImage.onload = (e) => {
      this.setState({
        coverHeight: bookImage.height,
        coverWidth: bookImage.width
      })
    }
  }

  componentDidMount() {
    this.loadBookCover(this.props.book.imageLinks.thumbnail)
  }

  render() {
    const { book, updateBookShelf } = this.props
    const { coverHeight, coverWidth } = this.state

    return (
      <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: coverWidth, height: coverHeight, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
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
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func
}

export default Book