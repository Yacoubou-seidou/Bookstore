import { createAsyncThunk } from '@reduxjs/toolkit';

const APIKEY = 'U6nWsxLwKVecoFbN8GLP';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books/`;

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    return fetch(URL)
      .then((res) => res.json());
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('book/addBook', async (data) => {
  try {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => data);
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  try {
    return fetch(URL + id, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => id);
  } catch (error) {
    return error;
  }
});
