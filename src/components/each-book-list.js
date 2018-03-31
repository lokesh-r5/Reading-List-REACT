import React from 'react'

function EachBookList(props) {

  props.books.map((searchBook) => {
    console.log(searchBook.title+"   "+searchBook.shelf);
  });

  return(
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={(e) => {props.onShelfSelection(book, e.target.value)}}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map((bookAuthor, i) => (
                <div key={i} className="book-authors">{bookAuthor}</div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default EachBookList;
