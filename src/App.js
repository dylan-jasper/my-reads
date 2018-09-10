import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} moveBook={this.moveBook} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage books={this.state.books} moveBook={this.moveBook} />
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
