import axios from 'axios';

const api = axios.create({baseURL: "https://rocketseat-node.herokuapp/api"})

export default api