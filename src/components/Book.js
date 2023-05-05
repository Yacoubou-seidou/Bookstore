import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <ul className="book">
      <li>{title}</li>
      <li>{author}</li>
    </ul>
  );
};

export default Book;
