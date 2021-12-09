import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    //baseURL: 'https://temsaude-desafio.herokuapp.com/'
    baseURL: '/api'
})

export default api