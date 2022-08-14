import { API_KEY, API_URL } from '@/helpers/constants.js'
import axios from 'axios'

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Api-Key': API_KEY
  }
})
