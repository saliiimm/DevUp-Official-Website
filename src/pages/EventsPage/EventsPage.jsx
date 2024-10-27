import { useState, useEffect } from 'react';
import './EventsPage.css';
import { MdLocationPin } from 'react-icons/md';
import { MdEvent } from 'react-icons/md';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import image from '../../assets/event1.jpg';
import image2 from '../../assets/event2.jpg';
import image3 from '../../assets/event3.jpg';
const EventsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    console.log(isMobile); // This will log the updated value of isMobile whenever it changes
  }, [isMobile]); // Dependency array includes isMobile

  const events = [
    {
      image: image2,
      title: 'Event 1',
      span: (
        <>
          <MdLocationPin /> Bloc 4,INIM,Boumerdes &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description:
        'Our club hosted an exciting DevFest in Boumerdes, filled with tech talks, hands-on workshops, and networking that brought together passionate developers and innovators.',
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: '25%',
    },
    {
      image: image,
      title: 'Event 1',
      span: (
        <>
          <MdLocationPin /> Bloc 4,INIM,Boumerdes &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description:
        "On International Women's Day, we celebrated by hosting workshops led by inspiring women, empowering participants to drive change and shape the future.",
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: '25%',
    },
    {
      image: image3,
      title: 'Event 2',
      span: (
        <>
          <MdLocationPin /> Bloc 4,INIM,Boumerdes &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description:
        'GamerJam offered a dynamic event where participants explored game development through workshops and mentorship, diving into design, coding, and the art of game creation.',
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: '25%',
    },
  ];

  return (
    <div className="event-page">
      <h1>Our Events</h1>
      <main className="main-container">
        <div className="vertical-line"></div>

        {events.map((event, index) => (
          <div key={index} className="event-container">
            <div className="circle" style={{ top: event.circlePosition }}></div>

            {/* Conditional rendering based on isMobile and index */}
            {isMobile ? (
              <div className="event-description">
                <h2>{event.title}</h2>
                <span>{event.span}</span>
                <p>{event.description}</p>
                <button className="event-button">{event.button}</button>
                <div className="event-image-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />
                </div>
              </div>
            ) : (
              <>
                {index % 2 === 0 ? (
                  <>
                    <div className="event-description">
                      <h2>{event.title}</h2>
                      <span>{event.span}</span>
                      <p>{event.description}</p>
                      <button className="event-button">{event.button}</button>
                    </div>
                    <div className="event-image-container">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="event-image"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="event-image-container">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="event-image"
                      />
                    </div>
                    <div className="event-description">
                      <h2>{event.title}</h2>
                      <span>{event.span}</span>
                      <p>{event.description}</p>
                      <button className="event-button">{event.button}</button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default EventsPage;
