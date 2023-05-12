import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APIKEY = 'U6nWsxLwKVecoFbN8GLP';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books/`;

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('book/addBook', async (data, thumkAPI) => {
  try {
    return axios.post(URL, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => data);
  } catch (error) {
    return thumkAPI.rejectWithValue('Oops! something went wrong');
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id, thumkAPI) => {
  try {
    return axios.delete(URL + id, { item_id: id }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => id);
  } catch (error) {
    return thumkAPI.rejectWithValue('Oops! something went wrong');
  }
});
