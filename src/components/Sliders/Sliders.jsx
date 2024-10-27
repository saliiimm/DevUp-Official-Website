/* eslint-disable react/prop-types */
import React from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Fab from '@mui/material/Fab';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { Card } from '../SlidersCard/Card';
import './Sliders.css';

export default function ResponsiveCarousel({ data }) {
  const ref = React.useRef();
  return (
    <div
      style={{ width: '100%', position: 'relative' }}
      className="sliders-section"
    >
      <h2>Leaders</h2>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 790) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={350}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <Fab
          style={{
            position: 'absolute',
            top: '50%',
            left: 150,
            zIndex: 20,
            backgroundColor: 'rgba(155, 155, 155, 0.1)',

            width: 50,
            height: 50,
          }}
          className="slider-btn left"
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <SlArrowLeft color="black" size={20} />
        </Fab>
        <Fab
          style={{
            position: 'absolute',
            top: '50%',
            right: 150,
            zIndex: 10,
            backgroundColor: 'rgba(155, 155, 155, 0.1)',

            width: 50,
            height: 50,
          }}
          className="slider-btn right"
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <SlArrowRight color="black" size={20} />
        </Fab>
      </>
    </div>
  );
}
