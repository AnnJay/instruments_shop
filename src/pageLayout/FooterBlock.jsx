import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FONT_COLORS, FONT_SIZE } from '../constants'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    height: 30px;
    color: ${FONT_COLORS.primary};
  }

  a {
    color: ${FONT_COLORS.primary};
    font-size: ${FONT_SIZE.xs};
  }

  a:hover {
    color: ${FONT_COLORS.body};
  }
`

export const FooterTitle = styled.h5`
  font-size: ${FONT_SIZE.sm};
  font-weight: 500;

  height: 35px;
  border-bottom: 1px solid ${FONT_COLORS.primary};
`

export const FooterBlockContainer = styled.div`
  width: 250px;
`

export const FooterContent = styled.p`
  font-size: ${FONT_SIZE.xs};
  line-height: 1.4;
`

export const FooterBlock = ({ title, content, linksList }) => {
  return (
    <FooterBlockContainer>
      <FooterTitle>{title}</FooterTitle>

      {content && <FooterContent>{content}</FooterContent>}

      {linksList && (
        <List>
          {linksList.map((item) => (
            <li key={item.id}>
              {item.linkType ? (
                <a href={`${item.linkType}:${item.link}`}>{item.label}</a>
              ) : (
                <Link to={`/${item.link}`}>{item.label}</Link>
              )}
            </li>
          ))}
        </List>
      )}
    </FooterBlockContainer>
  )
}
