import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The Logic Lounge transformed our vision into reality with their custom software development. Their expertise and seamless process exceeded our expectations!"
            author="John Carter, CEO at InnovateTech

            "
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The Logic Lounge delivered a sleek, high-performing web app tailored to our needs. Their attention to detail and timely delivery were outstanding."
            author="Emily Rogers, Product Manager at DigitalWorks"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Partnering with The Logic Lounge revolutionized our operations with their business management software. Efficient, intuitive, and exactly what we needed!"
            author="David Smith, Operations Head at GrowthBridge"
          />
        </LogoWrapper>
       
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
