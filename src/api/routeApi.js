import axios from 'axios';


const routeApi= axios.create({
    baseURL:'https://api.mapbox.com/optimized-trips/v1/mapbox/driving',
    params:{
    
        access_token:'pk.eyJ1IjoiY2FtaWxvLWhlcm5hbmRlejMiLCJhIjoiY2xhOGp4ZXdtMDB3dzN0cGwxd3FxNXRweiJ9.qdhx10s4KhEjJp6Qf2lf2A'
    }
});
export default routeApi;