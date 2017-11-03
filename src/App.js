import React from 'react'
import { Route } from 'react-router-dom'

import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks />
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
