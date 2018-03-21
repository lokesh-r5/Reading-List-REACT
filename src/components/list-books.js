import React from 'react'
import EachBookList from './each-book-list.js'
// import WantToRead from './want-to-read.js'
// import Read from './read.js'

function ListBooks(props) {
  const currentlyReading=props.books.filter(book => book.shelf ==="currentlyReading");

  const wantToRead=props.books.filter(book => book.shelf ==="wantToRead");

  const read=props.books.filter(book => book.shelf ==="read");

  const updateBook=(book, shelf) => {
    props.updateBook(book, shelf);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <EachBookList
            onShelfSelection={updateBook}
            books={currentlyReading}/>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <EachBookList
            onShelfSelection={updateBook}
            books={wantToRead}/>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <EachBookList
            onShelfSelection={updateBook}
            books={read}/>
          </div>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>
  )
}

export default ListBooks
