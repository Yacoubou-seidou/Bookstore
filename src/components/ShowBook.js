import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/booksThunk';
import Book from './Book';

const ShowBook = () => {
  const { books } = useSelector((store) => store.book);
  const booksArray = Object.keys(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {booksArray.map((book) => {
        const element = books[book][0];
        return (
          <Book
            key={book}
            title={element.title}
            author={element.author}
            id={book}
          />
        );
      })}
    </ul>
  );
};

export default ShowBook;
