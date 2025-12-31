import axios from "axios";

const noAuthApi = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000,
});

export default noAuthApi;