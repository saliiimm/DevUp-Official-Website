import './HomeWelcome.css';

const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const HomeWelcome = () => {
    return (
        <div className="home-welcome">
            <img src="src/assets/Hero.png" alt="welcome" />
            <h1 id='welcome'>Welcome to</h1>
            <h1 id='club'>Dev<span>Up</span> Club </h1>
            <h1 id='club-desc'>The place where you Innovate, Collaborate, Create </h1>
            <button onClick={toggleMenu}>Join Us</button>

        </div>
    )
}

export default HomeWelcome;