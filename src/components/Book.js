import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types, camelcase
  const { item_id, title, author } = book;
  return (
    <ul className="book">
      <li>{title}</li>
      <li>{author}</li>
      <li><button type="button" onClick={() => dispatch(deleteBook(item_id))}>delete</button></li>
    </ul>
  );
};

export default Book;
