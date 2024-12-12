import React from "react";
import {Link} from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <header className="header bg-blue-900">
      <div className="container">
        <h1>Web Solutions</h1>
        <nav>
          <ul>
          <Link to="/"><li>Home</li></Link>
           <Link to="/about"><li>About</li></Link>
           <Link to="/contact"><li>Contact</li></Link>
           <Link to="/services"><li>Services</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
