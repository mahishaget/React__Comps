// src/Components/Header/Header.js

import React from 'react';
import './Header.css'; // Optional, if you have custom header styles

function Header() {
  return (
    <header className="header-wrapper">
      <div className="internal-wrapper">
        <div className="header-links-wrapper">
          <ul>
            <li className="logo-link">
              <a href="/">
                <img src="/images/icons/logo.png" alt="Apple Logo" />
              </a>
            </li>
            <li><a href="/mac/">Mac</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Support</a></li>
            <li className="search-link">
              <a href="/search/">
                <img src="/images/icons/search-icon.png" alt="Search" />
              </a>
            </li>
            <li className="cart-link">
              <a href="/cart/">
                <img src="/images/icons/cart.png" alt="Cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
