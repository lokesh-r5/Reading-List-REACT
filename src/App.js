import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/search-books.js'
import ListBooks from './components/list-books.js'

class BooksApp extends React.Component {
  state={
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateBook=(book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      console.log(books)
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Route exact path="/search" render={ () =>  (
          <SearchBooks />
        )} />

        <Route path="/" render={ () => (
          <ListBooks
          updateBook={this.updateBook}
          books={this.state.books}
           />
        )} />
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
