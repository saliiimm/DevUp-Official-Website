import './Footer.css';
import DevUpLogo from '@/assets/DevUp-logo-without-writing.png';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  const handleClick = () => {
    // Navigate to the specified URL
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScOgLftkeAqi2dnEi_twzDCD7e6ex_Hctc5PJzjtf_DXJbYdQ/viewform?usp=sharing';
  };
  return (
    <footer>
      <div className="part-top">
        <div className="logo-button">
          <img src={DevUpLogo} alt="DevUp Logo" />
          <span>
            <p onClick={handleClick}>Join Us</p>
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
            <li>About</li>
            <li>About us</li>
            <li>Leaders</li>
            <li>Mission</li>
            <li>Vision</li>
          </ul>
          <ul className="links">
            <li>Events</li>
            <li>Devfest</li>
            <li>Design Day</li>
            <li>Gamer Jam</li>
            <li>Open day</li>
          </ul>
          <ul className="links">
            <li>Departments</li>
            <li>Web Dev</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>H&R</li>
            <li>O&O</li>
          </ul>
          <ul className="links tablet-phone">
            <li>Home</li>
            <li>About us</li>
            <li>Events</li>
            <li>Departments</li>
            <li onClick={handleClick}>Join Us</li>
          </ul>

          <div className="contact">
            <p>Contact Us</p>
            <div className="info">
              <MdLocationPin size={40} color="#32ff6a" />
              <p>UMBB faculty of science Building 5, Room 300</p>
            </div>
            <div className="info">
              <IoMail color="#32ff6a" />{' '}
              <p>
                {' '}
                <a href="mailto:Devupclubumbb@gmail.com">
                  devupclubumbb@gmail.com
                </a>
              </p>
            </div>
            <div className="info">
              <FaPhoneAlt color="#32ff6a" />{' '}
              <p>
                {' '}
                <a href="tel:0794 51 59 34">0794 51 59 34</a>
              </p>
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
          <a href="https://www.instagram.com/devup.umbb/">
            <FaInstagram size={25} className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/gdscumbb/posts/?feedView=all">
            <FaLinkedin size={25} className="icon" />
          </a>
          <a href="https://www.facebook.com/gdscumbb">
            <FaFacebookSquare size={25} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
