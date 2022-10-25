import axios from 'axios';


const calendarApi = axios.create({
    baseURL: 'https://mern-calendar-camiloh.herokuapp.com'
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