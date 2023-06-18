import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd/lib'
import styled from 'styled-components'

import { FONT_COLORS, FONT_SIZE } from '../constants'
import { getCategoryNameByType } from '../functions'

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

export const getBreadcrumbs = (categoryType, instrumentId) => {
  const breadcrumbs = [
    {
      title: <Link to="/">Главная</Link>,
    },
  ]

  if ((categoryType, instrumentId)) {
    breadcrumbs.push({
      title: (
        <Link to={`/${categoryType}`}>
          {getCategoryNameByType(categoryType)}
        </Link>
      ),
    })
  } else if (categoryType) {
    breadcrumbs.push({ title: getCategoryNameByType(categoryType) })
  }

  return breadcrumbs
}

export const Breadcrumbs = () => {
  const { categoryType, instrumentId } = useParams()

  if (!categoryType && !instrumentId) return null

  return (
    <StyledBreadcrumb
      separator=">"
      items={getBreadcrumbs(categoryType, instrumentId)}
    />
  )
}
