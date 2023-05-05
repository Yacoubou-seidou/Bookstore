import React from 'react';
import Book from './Book';

const ShowBook = () => {
  const books = [{ title: 'House', author: 'Henry' }, { title: 'Car', author: 'Ford' }];
  return (
    <>

      {books.map((element) => <Book props={element} key={element.title} />)}
    </>
  );
};

export default ShowBook;
