import './HomeDepartments.css';
import HomeDepartmentsItem from '../HomeDepartmentsItem/HomeDepartmentsItem';
import devlogo from '../../assets/dev-logo.png';
import designLogo from '../../assets/design-logo.png';
import marketigLogo from '../../assets/marketing-logo.png';
import outreachlogo from '../../assets/outreach-logo.png';
import humanlogo from '../../assets/human-logo.png';
const HomeDepartments = () => {
  return (
    <div className="home-departments">
      <h2>Departments</h2>
      <div id="departments-container">
        <div id="first-department">
          <HomeDepartmentsItem
            image={devlogo}
            title="Dev departement"
            description="Build websites and applications using React, JavaScript, and other modern tools. Perfect for anyone interested in coding and web technologies."
            link=""
          />
        </div>

        <HomeDepartmentsItem
          image={designLogo}
          title="Design departement"
          description="Craft intuitive and engaging UI/UX designs with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
          link=""
        />

        <HomeDepartmentsItem
          image={marketigLogo}
          title="Marketing departement"
          description=" Craft intuitive and engaging UI/UX designs with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
          link=""
        />

        <HomeDepartmentsItem
          image={outreachlogo}
          title="Outreach & Operations"
          description="Create videos and multimedia content using tools like Adobe Premiere and After Effects. Work on promotional content and event coverage."
          link=""
        />

        <HomeDepartmentsItem
          image={humanlogo}
          title="Human Resources"
          description="Manage recruitment, member engagement, and communication within the club, ensuring a smooth and collaborative environment."
          link=""
        />
      </div>
    </div>
  );
};

export default HomeDepartments;
