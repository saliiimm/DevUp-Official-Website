import AboutUsTextImage from '@/components/AboutUsTextImage/AboutUsTextImage';
import VisionAndMission from '../../components/VisionAndMission/VisionAndMission';
import Sliders from '../../components/Sliders/Sliders';
import StillHaveAQuestion from '../../components/StillHaveAQuestion/StillHaveAQuestion';
import { data } from '../../data/teamdata';

const AboutPage = () => {
  return (
    <div>
      <AboutUsTextImage />
      <Sliders data={data} title="Lead" />
      <VisionAndMission />
      <StillHaveAQuestion />
    </div>
  );
};

export default AboutPage;
