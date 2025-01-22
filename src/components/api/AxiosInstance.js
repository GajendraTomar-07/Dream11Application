

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    header: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance;

