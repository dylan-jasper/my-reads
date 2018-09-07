import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

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
    BooksAPI.update(book, shelf);
    this.componentDidMount();
  };

  render() {
    return (
      <div className="app">
        <SearchPage />
        <MainPage books={this.state.books} moveBook={this.moveBook} />
      </div>
    );
  }
}
export default BooksApp;
