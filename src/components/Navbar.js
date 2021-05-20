import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </>
  );
};
export default Navbar;
