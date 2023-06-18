import React from 'react'

import { PageLayout } from '../pageLayout'
import { HomePageSlider, PageContent } from '../components'
import { useAxiosRequest } from '../hooks'
import { SLIDER_IMAGES } from '../constants'
import { MainTitle } from '../pageLayout'

export const HomePage = () => {
  const { data, error, loaded } = useAxiosRequest('/categories', 'GET')

  const content = (
    <>
      <MainTitle>Широкий ассортимент инструментов на любой вкус</MainTitle>
      <HomePageSlider style={{ width: '50%' }} images={SLIDER_IMAGES} />
    </>
  )

  return (
    <PageLayout content={<PageContent loaded={loaded} content={content} />} />
  )
}
