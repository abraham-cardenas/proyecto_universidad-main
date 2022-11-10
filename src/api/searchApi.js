import axios from 'axios';

const searchApi= axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language: 'es',
        access_token:'pk.eyJ1IjoiY2FtaWxvLWhlcm5hbmRlejMiLCJhIjoiY2xhOGp4ZXdtMDB3dzN0cGwxd3FxNXRweiJ9.qdhx10s4KhEjJp6Qf2lf2A'
    }
})

export default searchApi;