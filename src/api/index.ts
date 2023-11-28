import axios from 'axios'

console.log(import.meta.env.VITE_API_ENDPOINT)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:8000',
})

export default api
