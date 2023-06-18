import { useEffect, useState } from 'react'
import { InstrumentsInstance } from '../api'

export const useAxiosRequest = (url, method, payload) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  const requestConfig = { method, url }

  if (payload) requestConfig.data = payload

  const fetch = (requestConfig) => {
    ;(async () => {
      setLoaded(false)
      
      try {
        const response = await InstrumentsInstance.request(requestConfig)

        setData(response.data.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoaded(true)
      }
    })()
  }

  useEffect(() => fetch(requestConfig), [])

  return { data, error, loaded, fetch }
}
