import './HomeWelcome.css';
import heroBg from '../../assets/Hero.png';
const HomeWelcome = () => {
  return (
    <div className="home-welcome">
      <img src={heroBg} alt="welcome home backgorund image" />
      <h1 id="welcome">Welcome to</h1>
      <h1 id="club">
        Dev<span>Up</span> Club{' '}
      </h1>
      <h1 id="club-desc">The place where you Innovate, Collaborate, Create </h1>
      <button>Join Us</button>
    </div>
  );
};

export default HomeWelcome;
