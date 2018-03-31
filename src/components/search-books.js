import React from 'react';
import { Link } from 'react-router-dom'
import EachBookList from './each-book-list.js'


class SearchBooks extends React.Component {
  state = {
    query: ""
  }

  updateBook=(book, shelf) => {
    this.props.updateBook(book, shelf);
  }

  doSearch=(targetValue) => {
    this.state.query = targetValue;
    this.props.searchBooks(targetValue);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(e)=>this.doSearch(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.query !== "" && <EachBookList
          onShelfSelection={this.updateBook}
          books={this.props.searchResults}/>}
        </div>
      </div>
    )
  }
  };


export default SearchBooks
