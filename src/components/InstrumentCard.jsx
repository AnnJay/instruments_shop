import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd/lib'

import { COMPONENT_COLORS, FONT_COLORS, FONT_SIZE } from '../constants'
import { getPriceView } from '../functions'

export const CardContainer = styled.div`
  width: 300px;
  height: 420px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  box-shadow: 0px 0px 10px 10px ${COMPONENT_COLORS.isabelle};

  color: ${FONT_COLORS.secondary};
  transition: box-shadow 0.4s;

  h3 {
    font-size: ${FONT_SIZE.xs};
    font-weight: 700;
  }

  :hover {
    box-shadow: 0px 0px 20px 10px ${COMPONENT_COLORS.grayOrange};
  }

  span {
    font-size: ${FONT_SIZE.sm};
    font-weight: 800 !important;
    text-align: center;
  }
`

export const CardImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`

const StyledButton = styled(Button)`
  background: ${COMPONENT_COLORS.caramel};
  border-radius: 8px;
  width: 100%;
  height: 44px;
  border: none;

  color: ${FONT_COLORS.primary} !important;
  transition: background-color 0.4s;

  span {
    font-size: ${FONT_SIZE.sm} !important;
  }

  &:hover {
    background: ${COMPONENT_COLORS.grayOrange};
    color: ${FONT_COLORS.primary} !important;
  }
`

export const InstrumentCard = ({ imgUrl, name, price, id }) => {
  const { categoryType } = useParams()

  return (
    <CardContainer>
      {imgUrl && (
        <Link to={`/${categoryType}/${id}`}>
          <CardImage src={imgUrl} alt={name} />
        </Link>
      )}

      {name && <h3>{name}</h3>}

      {price && <span>{getPriceView(price)}</span>}

      <Link to={`/${categoryType}/${id}`}>
        <StyledButton>Детали</StyledButton>
      </Link>
    </CardContainer>
  )
}
