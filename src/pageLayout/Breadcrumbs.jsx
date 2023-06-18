import React from 'react'
import { Breadcrumb } from 'antd/lib'
import styled from 'styled-components'
import { FONT_COLORS, FONT_SIZE } from '../constants'
import { Link } from 'react-router-dom'

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin-bottom: 30px;

  li {
    font-size: ${FONT_SIZE.sm};
    color: ${FONT_COLORS.secondary} !important;
  }

  a {
    color: ${FONT_COLORS.breadcrumbLink};
  }

  a:hover {
    color: ${FONT_COLORS.breadcrumbLink};
    background-color: transparent;
  }
`
const testitems = [
  {
    title: 'Главная',
  },
  {
    title: <Link>Application Center</Link>,
  },
  {
    title: <Link>Application List</Link>,
  },
  {
    title: 'An Application',
  },
]

export const Breadcrumbs = ({ items }) => {
  return <StyledBreadcrumb separator=">" items={testitems} />
}
