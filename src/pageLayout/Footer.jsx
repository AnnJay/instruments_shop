import React from 'react'

import { COMPONENT_COLORS, FOOTER_BLOCKS } from '../constants'
import { FooterBlock } from './FooterBlock'
import { ContentContainer } from './styledComponents'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 60px;
  background-color: ${COMPONENT_COLORS.caramel};
`

export const FooterInnerContainer = styled(ContentContainer)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterInnerContainer>
        {FOOTER_BLOCKS.map((block) => (
          <FooterBlock key={block.title} {...block} />
        ))}
      </FooterInnerContainer>
    </StyledFooter>
  )
}
