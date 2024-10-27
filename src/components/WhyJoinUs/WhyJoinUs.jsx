import React, { useState, useEffect } from "react";
import { PiCertificateFill } from "react-icons/pi";
import "./WhyJoinUs.css";
import Arrow, { DIRECTION } from 'react-arrows';
import number1 from '../../assets/01.png';
import number2 from '../../assets/02.png';
import number3 from '../../assets/03.png';

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 728 && window.innerWidth <= 992);

    const checkWidth = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 768);
        setIsTablet(width >= 728 && width <= 992);
    };

    useEffect(() => {
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return { isMobile, isTablet };
};

const WhyJoinUs = () => {
    const { isMobile, isTablet } = useResponsive();

    const reasons = [
        {
            title: "Learning Opportunities",
            description:
                "Gain access to courses, workshops, and certifications that boost your skills and open up new opportunities in the tech world.",
            icon: <PiCertificateFill />,
            image: number1,
            span: "from1"
        },
        {
            title: "Networking",
            description:
                "Join a community of like-minded individuals and professionals to exchange knowledge and grow together.",
            icon: <PiCertificateFill />,
            image: number2,
            span: "from2"
        },
        {
            title: "Career Development",
            description:
                "Get assistance and mentorship in career growth and job placement opportunities.",
            icon: <PiCertificateFill />,
            image: number3,
            span: "from3"
        },
    ];

    return (
        <div className="why-join-us">
            {!isMobile && !isTablet && (
                <>
                    <Arrow
                        className="arrow"
                        from={{
                            direction: DIRECTION.BOTTOM,
                            node: () => document.getElementById("from1"),
                            translation: [0, 0],
                        }}
                        to={{
                            direction: DIRECTION.TOP,
                            node: () => document.getElementById("from2"),
                            translation: [0.3, -0.2],
                        }}
                    />
                    <Arrow
                        className="arrow"
                        from={{
                            direction: DIRECTION.BOTTOM,
                            node: () => document.getElementById("from2"),
                            translation: [-1, -0.20],
                        }}
                        to={{
                            direction: DIRECTION.TOP,
                            node: () => document.getElementById("from3"),
                            translation: [0.5, -0.2],
                        }}
                    />
                </>
            )}

            <h1>Why Join Us</h1>

            <main className="why-join-us-containers">
                {reasons.map((reason, index) => (
                    <div className="why-join-us-container" key={index}>
                        {isMobile ? (
                            <>
                                <div className="reason-title">
                                    <div className="reason-image-container">
                                        <img src={reason.image} alt={reason.title} />
                                        <span id={reason.span}></span>
                                    </div>
                                    <h2>{reason.title}</h2>
                                </div>
                                <div className={`reason ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                    <div className="reason-icon">{reason.icon}</div>
                                    <p>{reason.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="reason-title">
                                            <div className="reason-image-container">
                                                <img src={reason.image} alt={reason.title} />
                                                <span id={reason.span}></span>
                                            </div>
                                            <h2>{reason.title}</h2>
                                        </div>
                                        <div className={`reason ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                            <div className="reason-icon">{reason.icon}</div>
                                            <p>{reason.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={`reason ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                            <div className="reason-icon">{reason.icon}</div>
                                            <p>{reason.description}</p>
                                        </div>
                                        <div className="reason-title">
                                            <div className="reason-image-container">
                                                <img src={reason.image} alt={reason.title} />
                                                <span id={reason.span}></span>
                                            </div>
                                            <h2>{reason.title}</h2>
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

export default WhyJoinUs;
