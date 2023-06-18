import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import { Footer } from './Footer'
import { Header } from './Header'
import { ContentContainer } from './styledComponents'
import styled from 'styled-components'

const { Content } = Layout

export const StyledContent = styled(Content)`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 60px;
`

export const PageLayout = ({ content }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <StyledContent>
        <ContentContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          {content}
        </ContentContainer>
      </StyledContent>

      <Footer />
    </Layout>
  )
}
