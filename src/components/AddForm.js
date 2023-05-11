import { useState, React } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/extensions
import { addBook } from '../redux/books/booksSlice';

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category: '',
        }),
      );
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" placeholder="author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddForm;
