import DepartmentHome from '../../components/DepartmentHome/DepartmentHome';
import DepartmentInfo from '../../components/DepartmentInfo/DepartmentInfo';
import WebDepLogo from '../../assets/web-dep-logo.png';
import Sliders from '../../components/Sliders/Sliders';
import { data } from '../../data/teamdata';
import StillHaveAQuestion from '../../components/StillHaveAQuestion/StillHaveAQuestion';
const DepartmentPage = () => {
  return (
    <main>
      <DepartmentHome />
      <DepartmentInfo
        departmentName="Web Department"
        paragraph=" Build websites and applications using React, JavaScript, and other
          modern tools. Perfect for anyone interested in coding and web
          technologies."
        image={WebDepLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={data} />
      <DepartmentInfo
        departmentName="Design Department"
        paragraph=" Craft intuitive and engaging Grapgic design with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
        image={WebDepLogo}
        borderColor="#070756"
      />
      <Sliders data={data} />
      <DepartmentInfo
        departmentName="Multimedia Department"
        paragraph="Create videos and multimedia content using tools like Adobe Premiere and After Effects. Work on promotional content and event coverage"
        image={WebDepLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={data} />
      <DepartmentInfo
        departmentName="Marketing Department"
        paragraph="Promote DevUp through social media, branding, and campaigns. Gain hands-on experience in digital marketing and content creation."
        image={WebDepLogo}
        borderColor="#070756"
      />
      <Sliders data={data} />
      <DepartmentInfo
        departmentName="Outreach & Opeartion Department"
        paragraph="The Outreach & Operations Department manages external partnerships, event coordination, and ensures smooth execution of all club activities."
        image={WebDepLogo}
        borderColor="#32ff6a"
      />
      <Sliders data={data} />
      <DepartmentInfo
        departmentName="Human Resources Department"
        paragraph="The H&R Department handles recruitment, team coordination, and fosters a positive work environment."
        image={WebDepLogo}
        borderColor="#070756"
      />
      <Sliders data={data} />
      <StillHaveAQuestion />
    </main>
  );
};

export default DepartmentPage;
