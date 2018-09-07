import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { book, moveBook, currentShelf } = props;
  console.log(props);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => {
              return moveBook(book, e.target.value);
            }}
            value={currentShelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors === 1
          ? book.authors
          : book.authors.map((a, i) => <span key={i}>{a} </span>)}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
};

export default Book;
