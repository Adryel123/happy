import axios from 'axios'
import REACT_NATIVE_LOCALHOST_ADDRESS from "../../env";

const api = axios.create({
    baseURL: `http://${REACT_NATIVE_LOCALHOST_ADDRESS}:3333`,
})

export default api