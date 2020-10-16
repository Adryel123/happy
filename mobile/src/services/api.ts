import axios from 'axios'

const api = axios.create({
    baseURL: `http://${process.env.LOCALHOST_ADDRESS}:3333`,
})

export default api