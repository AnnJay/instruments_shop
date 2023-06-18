import React from 'react'
import styled from 'styled-components'
import { COMPONENT_COLORS } from '../constants'

export const CardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 350px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 10px ${COMPONENT_COLORS.isabelle};

  :hover {
    box-shadow: 0px 0px 20px 10px ${COMPONENT_COLORS.isabelle};
  }
`

export const InstrumentCard = () => {
  return <CardContainer>Instrument card</CardContainer>
}
