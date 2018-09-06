import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <SearchPage />
        <MainPage />
      </div>
    );
  }
}
export default BooksApp;
