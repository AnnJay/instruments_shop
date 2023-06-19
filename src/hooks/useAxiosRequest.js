import { useEffect, useState } from 'react'
import { InstrumentsInstance } from '../api'
import { openErrorNotification } from '../functions'

export const useAxiosRequest = (url, method, payload) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  const requestConfig = { method, url }

  if (payload) requestConfig.data = payload

  const fetch = (config = requestConfig) => {
    ;(async () => {
      setLoaded(false)

      try {
        const response = await InstrumentsInstance.request(config)

        setData(response.data.data)
      } catch (error) {
        setError(error.message)
        openErrorNotification(error.message, 'REQUEST_ERROR')
      } finally {
        setLoaded(true)
      }
    })()
  }

  useEffect(() => fetch(requestConfig), [])

  return { data, error, loaded, fetch }
}
