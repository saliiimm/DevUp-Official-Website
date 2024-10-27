/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from 'react';

export const Card = memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, title, fullname } = data[dataIndex];
  return (
    <div
      style={{
        width: 350,
        height: 300,
        userSelect: 'none',
      }}
      className="my-slide-component"
    >
      <div className="slider-card">
        <img src={cover} alt="slider-img" />
        <h3>{fullname}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
});
