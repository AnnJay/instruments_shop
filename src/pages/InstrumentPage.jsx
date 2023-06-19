import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PageLayout } from '../pageLayout'
import { CommentSection, InstrumentSection, PageContent } from '../components'
import { useAxiosRequest } from '../hooks'
import {
  convertObjectsFieldsToCamelCase,
  convertResponseFieldsToCamelCase,
} from '../functions'
import { InstrumentContext } from '../context'

export const InstrumentPage = () => {
  const { categoryType, instrumentId } = useParams()
  const { setInstrument } = useContext(InstrumentContext)

  const { data, loaded, fetch } = useAxiosRequest(
    `/categories/${categoryType}/${instrumentId}`,
    'GET'
  )

  useEffect(() => {
    if (loaded) setInstrument(data.instrument)

    return () => setInstrument(null)
  }, [loaded])

  const content = (
    <>
      {data && (
        <>
          <InstrumentSection
            {...convertObjectsFieldsToCamelCase(data.instrument)}
          />

          <CommentSection
            comments={convertResponseFieldsToCamelCase(data.comments)}
            fetch={fetch}
          />
        </>
      )}
    </>
  )

  return (
    <PageLayout content={<PageContent loaded={loaded} content={content} />} />
  )
}
