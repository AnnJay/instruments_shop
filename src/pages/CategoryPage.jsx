import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { PageLayout } from '../pageLayout'
import { InstrumentCard, PageContent } from '../components'
import { useAxiosRequest } from '../hooks'
import { MainTitle } from '../pageLayout'
import {
  convertResponseFieldsToCamelCase,
  getCategoryNameByType,
} from '../functions'

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CategoryPage = () => {
  const { categoryType } = useParams()

  const { data, loaded, fetch } = useAxiosRequest(`/categories/${categoryType}`, 'GET')

  useEffect(() => {
    fetch(`/categories/${categoryType}`)
  }, [categoryType])


  const content = (
    <>
      <MainTitle>{getCategoryNameByType(categoryType)}</MainTitle>
      <CardsContainer>
        {data &&
          convertResponseFieldsToCamelCase(data).map((item) => (
            <InstrumentCard key={item.id} {...item} />
          ))}
      </CardsContainer>
    </>
  )

  return (
    <PageLayout content={<PageContent loaded={loaded} content={content} />} />
  )
}
