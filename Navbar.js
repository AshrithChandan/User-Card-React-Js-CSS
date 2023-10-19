import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <div className="navbar">
      <span>Brand Name</span>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default Navbar;
