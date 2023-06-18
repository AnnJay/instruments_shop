import { useEffect, useState } from 'react'
import { InstrumentsInstance } from '../api'

export const useAxiosRequest = (url, method, payload) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  const requestConfig = { method, url }

  if (payload) requestConfig.data = payload

  useEffect(() => {
    (async () => {
      try {
        const response = await InstrumentsInstance.request(requestConfig)

        console.log(response)
        setData(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { data, error, loaded }
}
