import axios from 'axios';

const directionsApi= axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview:'simplified',
        steps:false,
        access_token:'pk.eyJ1IjoiY2FtaWxvLWhlcm5hbmRlejMiLCJhIjoiY2xhOGp4ZXdtMDB3dzN0cGwxd3FxNXRweiJ9.qdhx10s4KhEjJp6Qf2lf2A'
    }
})

export default directionsApi;