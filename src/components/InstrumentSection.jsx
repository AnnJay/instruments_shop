import React, { useState } from 'react'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'

import { COMPONENT_COLORS, FONT_COLORS, FONT_SIZE } from '../constants'
import { getPriceView } from '../functions'

const SectionContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 70px;
`

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 16px;
  height: 400px;
  width: 400px;

  img {
    width: 100%;
    height: 100%;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  
  h2,
  span.price {
    color: ${FONT_COLORS.primary};
    font-size: ${FONT_SIZE.md};
    font-weight: 600;
  }

  p {
    color: ${FONT_COLORS.secondary};
    font-size: ${FONT_SIZE.sm};
    font-weight: 500;
    margin-top: 15px;
  }

  span {
    color: ${COMPONENT_COLORS.hotToddy}
  }
`

export const InstrumentSection = (props) => {
  const { name, price, description, material, isInTheShop, rating, imgUrl } =
    props

  return (
    <SectionContainer>
      <ImageContainer>
        <img src={imgUrl} alt={name} />
      </ImageContainer>

      <InfoContainer>
        <h2>{name}</h2>
        <Rating initialValue={rating} readonly />

        <p>{description}</p>
        <p>Материал: {material}</p>
        <p>
          В наличии:{' '}
          <span>
            {isInTheShop ? 'Есть в наличии, приходите' : 'Скоро привезём'}
          </span>
        </p>

        <div></div>

        <span className="price">{getPriceView(price)}</span>
      </InfoContainer>
    </SectionContainer>
  )
}
