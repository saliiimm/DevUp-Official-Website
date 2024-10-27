import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import { MdLocationPin } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import image from '../../assets/event1.jpg';
import image2 from '../../assets/event2.jpg';

const EventsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    console.log(isMobile); // This will log the updated value of isMobile whenever it changes
  }, [isMobile]); // Dependency array includes isMobile

  const events = [
    {
      image: image2,
      title: "Event 1",
      span: (
        <>
          <MdLocationPin /> New York City &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description: "The Open Day event is designed to introduce new and prospective members to the Nvidia Developers Group. This is a great opportunity for students to learn about the club, explore its various departments (Web Development, Design, Marketing, Multimedia, and H&R)",
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: "25%",
    },
    {
      image: image,
      title: "Event 1",
      span: (
        <>
          <MdLocationPin /> New York City &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description: "The Open Day event is designed to introduce new and prospective members to the Nvidia Developers Group. This is a great opportunity for students to learn about the club, explore its various departments (Web Development, Design, Marketing, Multimedia, and H&R)",
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: "25%",
    },
    {
      image: image2,
      title: "Event 2",
      span: (
        <>
          <MdLocationPin /> New York City &nbsp;&nbsp;
          <MdEvent /> March 12, 2021, 10:00 AM
        </>
      ),
      description: "Another exciting event for the community. Don't miss it!",
      button: (
        <>
          Attend &nbsp;&nbsp; <FaRegArrowAltCircleRight />
        </>
      ),
      circlePosition: "25%",
    },
    // Add more events as needed...
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
                  <img src={event.image} alt={event.title} className="event-image" />
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
                      <img src={event.image} alt={event.title} className="event-image" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="event-image-container">
                      <img src={event.image} alt={event.title} className="event-image" />
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
