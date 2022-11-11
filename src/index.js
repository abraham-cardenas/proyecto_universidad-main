import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import { store } from "./store";
import { Provider } from 'react-redux';
import mapboxgl from 'mapbox-gl'; 
import './components/modalStyles.css';

 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtaWxvLWhlcm5hbmRlejMiLCJhIjoiY2xhOGp4ZXdtMDB3dzN0cGwxd3FxNXRweiJ9.qdhx10s4KhEjJp6Qf2lf2A';

if( !navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocation')
  throw new Error('Tu navegador no tiene opcion de Geolocation');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
 // </React.StrictMode>
);
