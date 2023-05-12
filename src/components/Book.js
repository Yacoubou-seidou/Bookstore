import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksThunk';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <ul className="book">
      <li>{title}</li>
      <li>{author}</li>
      <li><button type="button" onClick={() => dispatch(deleteBook(id))}>delete</button></li>
    </ul>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
