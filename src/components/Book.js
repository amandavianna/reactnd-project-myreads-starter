import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookShelfChanger from './BookShelfChanger'
import bookCoverNotAvailable from './../icons/camera.svg'

class Book extends Component {
  state = {
    bookCover: '',
    coverHeight: 0,
    coverWidth: 0
  }

  loadBookCover(bookCover) {
    let bookImage = new Image()
    bookImage.src = bookCover

    bookImage.onload = (e) => {
      this.setState({
        bookCover,
        coverHeight: bookImage.height,
        coverWidth: bookImage.width
      })
    }
  }

  componentDidMount() {
    if (this.props.book.hasOwnProperty('imageLinks')) {
      this.loadBookCover(this.props.book.imageLinks.thumbnail)
    } else {
      this.setState({
        bookCover: bookCoverNotAvailable,
        coverHeight: 193,
        coverWidth: 128
      })
    }
  }

  render() {
    const { book, updateBookShelf } = this.props
    const { bookCover, coverHeight, coverWidth } = this.state

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: coverWidth, height: coverHeight, backgroundImage: `url(${bookCover})`}}></div>
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