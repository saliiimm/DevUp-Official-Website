import React, { useState, useEffect } from "react";
import { PiCertificateFill } from "react-icons/pi";
import "./WhyJoinUs.css";
import Arrow, { DIRECTION } from 'react-arrows';
import number1 from '../../assets/01.png';
import number2 from '../../assets/02.png';
import number3 from '../../assets/03.png';

const useIsTablet = () => {
    const [isTablet, setIsTablet] = useState(false);

    const checkWidth = () => {
        const width = window.innerWidth;
        // Define minimum and maximum width for tablets (adjust as needed)
        const minTabletWidth = 728;
        const maxTabletWidth = 992; // Example for common tablet size range
        setIsTablet(width >= minTabletWidth && width <= maxTabletWidth);
    };

    useEffect(() => {
        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return isTablet;
};

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkWidth = () => {
        const width = window.innerWidth;
        // Define minimum and maximum width for tablets (adjust as needed)
        const minMobileWidth = 0;
        const maxMobileWidth = 500; // Example for common tablet size range
        setIsMobile(width >= minMobileWidth && width <= maxMobileWidth);
    };

    useEffect(() => {
        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return isMobile;
};

const WhyJoinUs = () => {
    const isTabletDevice = useIsTablet();
    const isMobileDevice = useIsMobile();
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

            {!isMobileDevice && !isTabletDevice && (
                <Arrow
                    className="arrow"
                    from={{
                        direction: DIRECTION.BOTTOM, // Change from TOP to BOTTOM
                        node: () => document.getElementById("from1"),
                        translation: [0, 0],
                    }}
                    to={{
                        direction: DIRECTION.TOP, // Keep as TOP
                        node: () => document.getElementById("from2"),
                        translation: [0.3, -0.2],
                    }}
                />
            )}

            {!isMobileDevice && !isTabletDevice && (
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
            )}

            <h1>Why Join Us</h1>

            <main className="why-join-us-containers">
                {reasons.map((reason, index) => (
                    <div className="why-join-us-container" key={index}>
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
                    </div>
                ))}
            </main>
        </div>
    );
};

export default WhyJoinUs;
