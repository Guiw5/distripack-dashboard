import axios from 'axios'

const http = axios.create({
  baseURL: 'http://distripack-api-dev.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

export default http
