import React from 'react'
import styled from 'styled-components'
import SlickSlider from 'react-slick'

import { COMPONENT_COLORS, FONT_SIZE } from '../constants'

export const Slider = styled(SlickSlider)`
  width: 100%;
  margin-bottom: 90px;

  .slick-list {
    height: 300px !important;
  }

  .slick-dots li button:before {
    font-size: ${FONT_SIZE.xs};
    color: ${COMPONENT_COLORS.hotToddy};
  }
`

export const ImageContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 280px !important;

  img {
    width: 95%;
    height: 100%;
    object-fit: cover;
  }
`

export const HomePageSlider = ({ images }) => {
  const settings = {
    dots: true,
    autoplay: true,
    autospeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  return (
    <Slider {...settings}>
      {images.map((image, ind) => (
        <ImageContainer key={ind}>
          <img src={image} alt="decorative img" />
        </ImageContainer>
      ))}
    </Slider>
  )
}
