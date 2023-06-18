import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd/lib'
import styled from 'styled-components'

import { COMPONENT_COLORS, FONT_SIZE } from '../constants'

export const SpinContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = () => (
  <SpinContainer>
    <Spin
      indicator={
        <LoadingOutlined
          style={{ fontSize: FONT_SIZE.xl, color: COMPONENT_COLORS.chardonnay }}
          spin
        />
      }
    />
  </SpinContainer>
)
