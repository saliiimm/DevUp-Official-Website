/* eslint-disable react/prop-types */
import './DepartmentInfo.css';
const DepartmentInfo = ({ departmentName, paragraph, image, borderColor }) => {
  return (
    <section
      className="department-info-section"
      style={{ borderColor: borderColor }}
    >
      <div className="text-part">
        <h2 style={{ borderColor: borderColor }}>{departmentName}</h2>
        <p>{paragraph}</p>
      </div>
      <img src={image} alt={`${departmentName} icon`} />
    </section>
  );
};

export default DepartmentInfo;
