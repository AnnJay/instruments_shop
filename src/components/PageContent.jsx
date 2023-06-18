import React from 'react'
import { Loader } from './Loader'

export const PageContent = ({ loaded, content }) => {
  if (loaded) {
    return content
  }

  return <Loader />
}
