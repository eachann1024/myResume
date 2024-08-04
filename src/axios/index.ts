import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

export function get(url: string, params?: any) {
  return instance.get(url, { params })
}

export function post(url: string, data?: any) {
  return instance.post(url, data)
}
