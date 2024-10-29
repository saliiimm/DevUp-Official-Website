import DepartmentHome from '../../components/DepartmentHome/DepartmentHome';
import DepartmentInfo from '../../components/DepartmentInfo/DepartmentInfo';
import WebDepLogo from '../../assets/web-dep-logo.png';
import DesignDepLogo from '../../assets/design-dep-logo.png';
import marketingDepLogo from '../../assets/marketong-dep-logo.png';
import hrDepLogo from '../../assets/human-resource-logo.png';
import oandoLogo from '../../assets/oando-logo.png';
import videographyDepLogo from '../../assets/videography-dep-logo.png';
import Sliders from '../../components/Sliders/Sliders';
import StillHaveAQuestion from '../../components/StillHaveAQuestion/StillHaveAQuestion';
import { webTeamData } from '../../data/webteamdata';
import { designTeamData } from '../../data/designteamdata';
import { marketingTeamData } from '../../data/marketingteamdata';
import { hrTeamData } from '../../data/hrteamdata';
import { oandoTeamData } from '../../data/ooteamdata';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const DepartmentPage = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Get the element by ID (remove #)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the element
      }
    }
  }, [hash]);
  return (
    <main>
      <DepartmentHome />
      <DepartmentInfo
        departmentName="Dev Department"
        paragraph=" Build websites and applications using React, JavaScript, and other
          modern tools. Perfect for anyone interested in coding and web
          technologies."
        image={WebDepLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={webTeamData} />
      <DepartmentInfo
        departmentName="Design Department"
        paragraph=" Craft intuitive and engaging Grapgic design with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
        image={DesignDepLogo}
        borderColor="#070756"
      />
      <Sliders data={designTeamData} />
      <DepartmentInfo
        departmentName="Multimedia Department"
        paragraph="Create videos and multimedia content using tools like Adobe Premiere and After Effects. Work on promotional content and event coverage"
        image={videographyDepLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={marketingTeamData} />
      <DepartmentInfo
        departmentName="Marketing Department"
        paragraph="Promote DevUp through social media, branding, and campaigns. Gain hands-on experience in digital marketing and content creation."
        image={marketingDepLogo}
        borderColor="#070756"
      />
      <Sliders data={marketingTeamData} />
      <DepartmentInfo
        departmentName="Outreach & Opeartion Department"
        paragraph="The Outreach & Operations Department manages external partnerships, event coordination, and ensures smooth execution of all club activities."
        image={oandoLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={oandoTeamData} />
      <DepartmentInfo
        departmentName="Human Resources Department"
        paragraph="The H&R Department handles recruitment, team coordination, and fosters a positive work environment."
        image={hrDepLogo}
        borderColor="#070756"
      />
      <Sliders data={hrTeamData} />
      <StillHaveAQuestion />
    </main>
  );
};

export default DepartmentPage;
