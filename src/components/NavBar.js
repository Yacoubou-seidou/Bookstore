import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const NavBar = () => (
  <nav>
    <h1>Bookstore</h1>
    <ul className="links">
      <li>
        <a href="/">Books</a>
      </li>
      <li>
        <a href="/categories">Categories</a>
      </li>
    </ul>
    <AiOutlineUser />
  </nav>
);

export default NavBar;
