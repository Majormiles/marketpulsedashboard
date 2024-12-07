import axios from 'axios'
const api = axios.create({
    baseURL: 'https://marketpulse-api.onrender.com/api'
})
export default api