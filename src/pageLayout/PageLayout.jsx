import React from 'react'
import { Layout } from 'antd/lib'
import { Footer } from './Footer'
import { Header } from './Header'
import { ContentContainer } from './styledComponents'
import styled from 'styled-components'
import { Breadcrumbs } from './Breadcrumbs'

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
          <Breadcrumbs />
          
          {content}
        </ContentContainer>
      </StyledContent>

      <Footer />
    </Layout>
  )
}
