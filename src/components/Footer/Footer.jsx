import './Footer.css';
import DevUpLogo from '@/assets/DevUp-logo-without-writing.png';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer>
      <div className="part-top">
        <div className="logo-button">
          <img src={DevUpLogo} alt="DevUp Logo" />
          <span>
            <p>Join Us</p>
            <BsArrowRightCircle />
          </span>
        </div>
        <div className="text-parts">
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Department</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Department</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Department</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
          <ul className="links">
            <li>Home</li>
            <li>About</li>
            <li>Department</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
          <ul className="links tablet-phone">
            <li>Home</li>
            <li>About us</li>
            <li>Events</li>
            <li>Departments</li>
            <li>Join Us</li>
          </ul>

          <div className="contact">
            <p>Contact Us</p>
            <div className="info">
              <GiPositionMarker size={40} />
              <p>UMBB faculty of science Building 5, Room 300</p>
            </div>
            <div className="info">
              <IoMail /> <p>contact@gmail.com</p>
            </div>
            <div className="info">
              <FaPhoneAlt /> <p>+213 773 66 21 25</p>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          borderColor: 'white',
          backgroundColor: 'white',
          color: 'white',
        }}
      />
      <div className="part-bottom">
        <p>© 2024 DevUp. All Rights Reserved.</p>
        <div className="socials">
          <FaInstagram size={25} className="icon" />
          <FaLinkedin size={25} className="icon" />
          <FaFacebookSquare size={25} className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
