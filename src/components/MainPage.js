import React, { Component } from "react";
import Book from "./Book.js";
import PropTypes from "prop-types";

class MainPage extends Component {
  state = {};

  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  };
  render() {
    const { books, moveBook } = this.props;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(b => {
                        return b.shelf === "currentlyReading";
                      })
                      .map(b => {
                        return (
                          <li key={b.id}>
                            <Book
                              book={b}
                              moveBook={moveBook}
                              currentShelf={b.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(b => {
                        return b.shelf === "wantToRead";
                      })
                      .map(b => {
                        return (
                          <li key={b.id}>
                            <Book
                              book={b}
                              moveBook={moveBook}
                              currentShelf={b.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(b => {
                        return b.shelf === "read";
                      })
                      .map(b => {
                        return (
                          <li key={b.id}>
                            <Book
                              book={b}
                              moveBook={moveBook}
                              currentShelf={b.shelf}
                            />
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </a>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default MainPage;
