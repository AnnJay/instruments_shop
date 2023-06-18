import styled from 'styled-components'
import { FONT_COLORS, FONT_SIZE } from '../constants'

export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`

export const MainTitle = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  color: ${FONT_COLORS.primary};
  font-size: ${FONT_SIZE.md};
  text-align: center;
`
