import './AboutUsTextImage.css';
import welcomeDayImg from '@/assets/welcome-day-image.png';
import Topography from '@/assets/Topography-about-us.png';
const AboutUsTextImage = () => {
  return (
    <section className="about-us-text-image-section">
      <img src={Topography} alt="Topographic lines" />
      <h2>About Us</h2>
      <div>
        <p>
          The DevUp club was founded to bridge the gap between academia and
          real-world tech. Started by passionate students, the club offers
          hands-on experience in development, design, marketing, and multimedia.
          NDG has grown into a thriving community, fostering innovation through
          projects, workshops, and hackathons{' '}
        </p>
        <img src={welcomeDayImg} alt="2023 Welcome Day Image" />
      </div>
    </section>
  );
};

export default AboutUsTextImage;
