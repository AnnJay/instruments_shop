import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COMPONENT_COLORS, FONT_COLORS, FONT_SIZE } from '../constants'

export const Card = styled.div`
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
`

export const CategoryCard = ({ description, imgSrc, elementClass, type }) => (
  <Card className={elementClass}>
    {imgSrc && (
      <Link to={`/${type}`}>
        <img src={imgSrc} alt={`${type} image`} />
      </Link>
    )}
    {description && <p>{description}</p>}
  </Card>
)
