import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd/lib'

import {
  ADDITIONAL_MENU_ITEMS,
  CATEGORIES,
  COMPONENT_COLORS,
  FONT_SIZE,
} from '../constants'
import styled from 'styled-components'
import { ContentContainer } from './styledComponents'

const MENU_ITEMS = [...CATEGORIES, ...ADDITIONAL_MENU_ITEMS]

export const StyledHeader = styled.header`
  height: 150px;
  padding: 60px;
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

export const StyledMenu = styled(Menu)`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  background-color: ${COMPONENT_COLORS.fallow};

  border-radius: 16px;
  font-size: ${FONT_SIZE.sm};

  display: flex;
  justify-content: space-between;

  li {
    text-align: center;
    width: 16.6%;
    padding: 0;
  }

  li:hover,
  li.ant-menu-item-selected:after,
  li.ant-menu-item-active:after {
    border: none !important;
  }

  .ant-menu-item-selected {
    color: ${COMPONENT_COLORS.fieldgrau} !important;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderInnerContainer>
        <StyledLogo src="/images/logo.svg" alt="site logo" />

        <StyledMenu
          mode="horizontal"
          items={MENU_ITEMS.map((item) => {
            return {
              key: item.id,
              label: <Link to={item.link}>{item.label}</Link>,
            }
          })}
        />
      </HeaderInnerContainer>
    </StyledHeader>
  )
}
