/* eslint-disable react/prop-types */
import './VisionandMissionCard.css';
const VisionandMissionCard = ({ title, image, paragraph }) => {
  return (
    <div className="vision-mission-card">
      <div className="top">
        <h2>
          Our <br /> <span>{title}</span>
        </h2>
        <img src={image} alt="vision icon" />
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default VisionandMissionCard;
