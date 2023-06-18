import axios from 'axios'

export const InstrumentsInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
})