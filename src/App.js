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

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <SearchPage />
        <MainPage books={this.state.books} />
      </div>
    );
  }
}
export default BooksApp;
