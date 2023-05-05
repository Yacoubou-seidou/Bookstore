import React from 'react';

const AddForm = () => (
  <form>
    <input type="text" name="title" placeholder="Book title" />
    <input type="select" name="select" placeholder="Categories" />
    <button type="submit">ADD BOOK</button>
  </form>
);

export default AddForm;
