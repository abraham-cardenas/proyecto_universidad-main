import { AnySourceData, LngLatBounds, Map, Marker, Popup } from "mapbox-gl";
import { useContext, useReducer, useEffect } from 'react';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../places/PlacesContext';
import axios from "axios";
import routeApi from "../../api/routeApi";
import { ruta1 } from "./direcciones";
import directionsApi from "../../api/directionsApi";




const INITIAL_STATE = {
    isMapReady: false,
    map: undefined,
    Markers: [],
}



export const MapProvider = ({ children }) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const { places, userLocaltion,  searchPlacesByTerm } = useContext(PlacesContext);

    //*pendiente de los lugares
    useEffect(() => {

        //* borrar los marcadores
        /* state.Markers.forEach(marker=>marker.remove()); */

        const newMarkers = [];

        let i = 0;

        for (const direccion of ruta1) {

            const [lng, lat] = [direccion.lng, direccion.lat];

            const popup = new Popup()
                .setHTML(`
                <h6>${direccion.name}</h6>
                <p>${direccion.name}</p>
            `);
            //*añadimos el marcador
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([lng, lat])
                .addTo(state.map);
            newMarkers.push(newMarker);

            getRouteBetweenPoints(userLocaltion, [lng, lat], direccion.name.toString(), direccion.color)

        }
      //  routeOptime();


    }, [places]);


    const routeOptime = async () => {

        //ruta ejemplo

        //todo: falta terminar la configuración

        const init=userLocaltion;
        const cord1 = [-74.802496, 4.287298];
        const cord2 = [-74.90161858974514, 4.2058057405956895];
        const cord3 = [-74.79695816931519, 4.299088392353207];
      
        

        const resp = await routeApi.get(`/${init.join(',')};${cord1.join(',')};${cord2.join(',')};${cord3.join(',')}`)

        var polyline = require('@mapbox/polyline');


        const p = polyline.decode(resp.data.trips[0].geometry);
        
       for (let index = 0; index < p.length; index++) {
        
        p[index]=[p[index][1], p[index][0]]
        
       }
       
      

         const sourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates:p
                        }
                    }
                ]
            }
        }

      

        state.map?.addSource('RouteString', sourceData );

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'blue',
                'line-width': 3
            }
        })








    }
    //*TRAZAR Los puntos
    const getRouteBetweenPoints = async (start, end, id, color) => {


        const resp = await directionsApi.get(`/${start.join(',')}; ${end.join(',')}`);
        const { distance, duration, geometry } = resp.data.routes[0];
        const { coordinates: coords } = geometry;


        const bounds = new LngLatBounds(
            start,
            start
        );
        //*barremos todos los puntos 
        for (const coord of coords) {
            const newCoord = [coord[0], coord[1]]
            bounds.extend(newCoord)

        }
        //*para que se acomode 
        state.map?.fitBounds(bounds, {
            padding: 200
        });

    }


    const setMap = (map) => {

        //*cuadro de info
        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aquí estoy</h4>
            `)

        //*se agregan los puntos
        new Marker({
            color: '#61DAFB'
        })
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map)

        dispatch({ type: 'setMap', payload: map })
        searchPlacesByTerm('a')

    }

    return (
        <MapContext.Provider value={{
            //*state
            ...state,

            //*Methods
            setMap,
            getRouteBetweenPoints
        }}>
            {children}
        </MapContext.Provider>
    )

}
