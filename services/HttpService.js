import axios from 'axios';
import debugLog from 'axios-debug-log';


debugLog(axios);

export default class HttpService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
        });

        

    }
    
    

    post(url, data){
        return this.axios.post(url, data);
    }
}