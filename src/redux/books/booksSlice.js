import { createSlice } from '@reduxjs/toolkit';
import { addBook, getBooks, deleteBook } from './booksThunk';

const initialState = {
  books: [],
  error: false,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.error = true;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      const {
        title, author, category,
      } = payload;
      state.books[payload.item_id] = [{
        title,
        author,
        category,
      }];
    },
    [deleteBook.fulfilled]: (state, { payload }) => {
      delete state.books[payload];
    },
  },
});

export default booksSlice.reducer;
