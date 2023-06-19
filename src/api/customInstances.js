import axios from 'axios'

export const InstrumentsInstance = axios.create({
  baseURL: 'https://test-api-c8k4.onrender.com/api/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
})
