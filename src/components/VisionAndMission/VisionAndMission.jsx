import VisionandMissionCard from '../VisionandMissionCard/VisionandMissionCard';
import './VisionAndMission.css';
import VisionImg from '@/assets/vision-img.png';
import MissionImg from '@/assets/mission-img.png';
import Topography from '@/assets/Topography-about-us-mission.png';
const VisionAndMission = () => {
  return (
    <section className="vision-and-mission-section">
      <img src={Topography} alt="Topographic lines" />
      <VisionandMissionCard
        title="Vision"
        image={VisionImg}
        paragraph="Our vision is to be the leading student club in the region, where
    future developers, designers, marketers, and multimedia specialists
    can grow, connect, and shape the future of technology"
      />
      <VisionandMissionCard
        title="Mission"
        image={MissionImg}
        paragraph="Our mission is to inspire innovation, cultivate creativity, and empower students through technology. We are dedicated to providing members with opportunities to work on real-world projects, gain industry-relevant skills, and collaborate in a supportive, inclusive community"
      />
    </section>
  );
};

export default VisionAndMission;
