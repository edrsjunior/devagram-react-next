import axios from 'axios';

export default class HttpService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUB_API_URL + '/api'
        })
    }
}