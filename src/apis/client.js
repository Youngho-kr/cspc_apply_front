import axios from 'axios';

const API_SERVER_URL = 'https://apply.cspc.me/api'

export const Client = axios.create({
    baseURL: API_SERVER_URL,

})