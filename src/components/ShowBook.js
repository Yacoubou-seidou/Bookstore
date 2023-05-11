import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ShowBook = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <>
      {books.map((element) => (
        <Book
          id={element.id}
          key={element.id}
          title={element.title}
          author={element.author}
        />
      ))}
    </>
  );
};

export default ShowBook;
