import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd/lib'
import styled from 'styled-components'

import {
  COMPONENT_COLORS,
  FONT_COLORS,
  FONT_SIZE,
  MENU_ITEMS,
} from '../constants'

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
    border-color: ${COMPONENT_COLORS.fallow} !important;
  }

  .ant-menu-item-selected {
    color: ${FONT_COLORS.link} !important;
  }
`

export const Navigation = () => {
  return (
    <StyledMenu
      mode="horizontal"
      items={MENU_ITEMS.map((item) => {
        return {
          key: item.id,
          label: <Link to={`/${item.link}`}>{item.label}</Link>,
        }
      })}
    />
  )
}
