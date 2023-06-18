import React from 'react'

import { COMPONENT_COLORS } from '../constants'
import styled from 'styled-components'
import { ContentContainer } from './styledComponents'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  height: 150px;
  padding: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${COMPONENT_COLORS.caramel};
`

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
`

export const HeaderInnerContainer = styled(ContentContainer)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderInnerContainer>
        <Link to="/">
          <StyledLogo src="/images/logo.svg" alt="site logo" />
        </Link>

        <Navigation />
      </HeaderInnerContainer>
    </StyledHeader>
  )
}
