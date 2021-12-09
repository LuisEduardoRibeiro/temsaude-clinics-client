import axios from 'axios'

export const API_KEY = [GOOGLE_KEY]

const api = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/'
})

export default api
