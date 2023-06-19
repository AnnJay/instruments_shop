import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PageLayout } from '../pageLayout'
import { InstrumentSection, PageContent } from '../components'
import { useAxiosRequest } from '../hooks'
import { convertObjectsFieldsToCamelCase } from '../functions'
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
        <InstrumentSection
          {...convertObjectsFieldsToCamelCase(data.instrument)}
        />
      )}
    </>
  )

  return (
    <PageLayout content={<PageContent loaded={loaded} content={content} />} />
  )
}
