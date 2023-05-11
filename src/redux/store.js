// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
