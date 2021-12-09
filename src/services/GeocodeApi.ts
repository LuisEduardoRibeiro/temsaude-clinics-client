import axios from 'axios'

export const API_KEY = 'AIzaSyCFsUJxsW8zxO4q8WUOXuxVkOCnxqoI5gs'

const api = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/'
})

export default api