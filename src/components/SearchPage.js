import React, { Component } from "react";
import Book from "./Book";
import escapeStringRegexp from "escape-string-regexp";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

class SearchPage extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  static propTypes = {
    books: PropTypes.array.isRequired
  };

  updateQuery = query => {
    this.setState({ query: query });
    this.updateSearchedBooks(query);
  };

  updateSearchedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(searched => {
        this.setState({ searchedBooks: searched });
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    const { books } = this.props;
    const { searchedBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() =>
              this.setState({
                showSearchPage: false
              })
            }
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(searchedBook => {
              return (
                <li key={searchedBook.id}>
                  <Book book={searchedBook} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
