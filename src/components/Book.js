import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { book, moveBook, currentShelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url(${book.imageLinks.smallThumbnail})`
              : ""
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => moveBook(book, e.target.value)}
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
        {book.authors
          ? book.authors.map(author => (
              <span>
                {author}
                <br />
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func,
  currentShelf: PropTypes.string
};

export default Book;
