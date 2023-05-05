import React from 'react';

// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  // eslint-disable-next-line react/prop-types
  const { title, author } = book;
  return (
    <ul className="book">
      <li>{title}</li>
      <li>{author}</li>
    </ul>
  );
};

export default Book;