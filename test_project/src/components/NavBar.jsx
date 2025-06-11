import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <input className="search" placeholder="Search" />
      <div className="nav-links">
        <a  href='#'>ARIS</a>
        <a  href='#'>Genres</a>
        <a  href='#'>Authors</a>
        <a  href='#'>Blog</a>
        <a  href='#'>About</a>
        <a  href='#' className="sign-in">Sign In</a>
      </div>
    </nav>
  );
}

export default NavBar;