import './HomeWelcome.css';
import heroBg from '../../assets/Hero.png';

const HomeWelcome = () => {

  const handleClick = () => {
    // Navigate to the specified URL
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScOgLftkeAqi2dnEi_twzDCD7e6ex_Hctc5PJzjtf_DXJbYdQ/viewform?usp=sharing';
  };
  return (
    <div className="home-welcome">
      <img src={heroBg} alt="welcome home backgorund image" />
      <h1 id="welcome">Welcome to</h1>
      <h1 id="club">
        Dev<span>Up</span> Club{' '}
      </h1>
      <h1 id="club-desc">The place where you Innovate, Collaborate, Create </h1>
      <button onClick={handleClick}>Join Us</button>
    </div>
  );
};

export default HomeWelcome;
