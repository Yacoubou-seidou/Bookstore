import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import Book from './Book';

const ShowBook = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <>
      {books.map((element) => <Book book={element} key={element.item_id} />)}
    </>
  );
};

export default ShowBook;
