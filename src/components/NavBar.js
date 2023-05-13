import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import '../styles/navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <ul className="links">
      <li>
        <a href="/">Books</a>
      </li>
      <li>
        <a href="/categories">Categories</a>
      </li>
    </ul>
    <AiOutlineUser className="user" />
  </nav>
);

export default NavBar;
