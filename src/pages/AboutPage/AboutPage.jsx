import AboutUsTextImage from '@/components/AboutUsTextImage/AboutUsTextImage';
import VisionAndMission from '../../components/VisionAndMission/VisionAndMission';
import Sliders from '../../components/Sliders/Sliders';
import StillHaveAQuestion from '../../components/StillHaveAQuestion/StillHaveAQuestion';
import { leadData } from '../../data/leaddata';

const AboutPage = () => {
  return (
    <main>
      <AboutUsTextImage />
      <Sliders data={leadData} title="Lead" />
      <VisionAndMission />
      <StillHaveAQuestion />
    </main>
  );
};

export default AboutPage;
