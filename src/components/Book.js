import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksThunk';
import ProgressBar from './Progress';
import '../styles/book.css';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const poucentage = 50;
  return (
    <li className="book">
      <div className="details">
        <span className="category">category</span>
        <h2>{title}</h2>
        <span className="author">{author}</span>
        <div className="action">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress">
        <ProgressBar percentage={poucentage} />

        <div className="chapter">
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 17</p>
          <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
        </div>
      </div>

    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
