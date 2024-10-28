import { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import DevUpLogo from '@/assets/DevUp-logo-without-writing.png';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    // Navigate to the specified URL
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScOgLftkeAqi2dnEi_twzDCD7e6ex_Hctc5PJzjtf_DXJbYdQ/viewform?usp=sharing';
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
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
          <button onClick={handleClick}>Join Us</button>
        </li>
      </ul>

      <RxHamburgerMenu className="burger" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
