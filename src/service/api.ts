import axios from "axios"
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  timeout: import.meta.env.VITE_TIME,
  headers: { 'X-Custom-Header': 'foobar' }
});
export { instance }

