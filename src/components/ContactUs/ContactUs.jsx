import './Contact.css';
import { MdLocationPin } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-infos">
          {/* First Contact Info Item */}
          <div className="contact-info">
            <div className="contact-info-item">
              <h2>Visit Us</h2>
              <div className="contact-info-description">
                <MdLocationPin />
                <div>
                  <p>M’hammed Bougara university </p>
                  <p>faculty of science</p>
                  <p>Building 5, Room 300</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Contact Info Item */}
          <div className="contact-info">
            <div className="contact-info-item">
              <h2>Contact</h2>
              <div className="contact-info-description">
                <MdEmail />
                <div>
                  <p>
                    {' '}
                    <a
                      href="mailto:Devupclubumbb@gmail.com"
                      style={{ color: '#656565' }}
                    >
                      devupclubumbb@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info-description">
                <FaPhone />
                <div>
                  <p>
                    <a href="tel:0794 51 59 34" style={{ color: '#656565' }}>
                      0794 51 59 34
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Iframe Section */}
        <div className="iframe-container">
          <iframe
            src="https://maps.google.com/maps?q=university%20m'hamed%20bougara%20faculty%20de%20science%20&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            id="gmap_canvas"
            frameBorder="0"
            scrolling="no"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
