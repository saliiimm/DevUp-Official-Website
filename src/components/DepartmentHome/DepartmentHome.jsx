import './DepartmentHome.css';
import designDayimg from '@/assets/deisgn-day-img.png';
import Topography from '@/assets/Topography-about-us.png';
import Topography2 from '@/assets/Topography-about-us-mission.png';
import Diamond from '@/assets/diamond.png';
const DepartmentHome = () => {
  return (
    <section className="deparment-home-section">
      <img src={Topography} alt="Topographic lines" />
      <img src={Topography2} alt="Topographic lines" />

      <h2>Our Departments</h2>
      <div className="image-holders">
        <img src={designDayimg} alt="design day image" className="principal" />
        <img src={designDayimg} alt="design day image" className="secondary1" />
        <img src={designDayimg} alt="design day image" className="secondary2" />
        <img src={Diamond} alt="a beautiful diamond" className="diamond1" />
        <img src={Diamond} alt="a beautiful diamond" className="diamond2" />
      </div>
    </section>
  );
};

export default DepartmentHome;
