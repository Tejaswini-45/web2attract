import React from 'react';

function Header() {
  return (
    <header>
      <div className="hero">
        <h1>Living Room Design Ideas</h1>
        <p>Find inspiration for your perfect living room.</p>
      </div>
      <div className="filter-bar">
              <input type="text" placeholder="Search by style, color, etc." />
      </div>
    </header>
  );
}

export default Header;
