import axios from 'axios';


const calendarApi = axios.create({
    baseURL: 'http://localhost:4000'
});

//TODO: configurar interceptores
calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default calendarApi;