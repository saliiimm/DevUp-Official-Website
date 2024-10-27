import React, { useState } from 'react';
import './Navbar.css';
import DevUpLogo from '@/assets/DevUp-logo-without-writing.png';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img src={DevUpLogo} alt="DevUp Logo" />
      </Link>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/department" onClick={toggleMenu}>
            Departments
          </Link>
        </li>
        <li>
          <button onClick={toggleMenu}>Join Us</button>
        </li>
      </ul>

      <RxHamburgerMenu className="burger" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
