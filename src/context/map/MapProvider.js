import { LngLatBounds, Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from './MapContext';
import { useReducer, useContext, useEffect } from 'react';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../places/PlacesContext';
import directionsApi from "../../api/directionsApi";




const INITIAL_STATE = {
    isMapReady: false,
    map: undefined,
    markers: []
}




export const MapProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext(PlacesContext);
    useEffect(() => {
        state.markers.forEach(marker => marker.remove());
        const newMarkers= []
        for (const place of places) {
            const [lng, lat] = place.center;
            const popup = new Popup().setHTML(`
                <h6>${place.text_es}</h6>
                <p>${place.place_name_es}</p>
            `)
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([lng, lat])
                .addTo(state.map)

            newMarkers.push(newMarker);
        }
        //Todo limpiar polyline

        dispatch({ type: 'setMarkers', payload: newMarkers });

    }, [places])


    const setMap = (map) => {
        const MyLocationPopup = new Popup()
            .setHTML(`
            <h4>Aquí estoy</h4>
            <p>En algún lugar del mundo</p>
            `)

        new Marker({
            color: "#61DAFB"
        })
            .setLngLat(map.getCenter())
            .setPopup(MyLocationPopup)
            .addTo(map);

        dispatch({ type: 'setMap', payload: map });

    }
    const getRouteBetweenPoints = async (start, end) => {
        const resp = await directionsApi.get(`/${start.join(',')};${end.join(',')}`)
        const { distance, duration, geometry } = resp.data.routes[0]
        const { coordinates: coords } = geometry;
        let kms = distance / 1000
        kms = Math.round(kms * 100);
        kms = kms / 100;

        const minutes = Math.floor(duration / 60)
        console.log({ kms, minutes });
        const bounds = new LngLatBounds(
            start,
            start
        );

        for (const coord of coords) {
            const newCoord = [coord[0], coord[1]]
            bounds.extend(newCoord)
        }
        state.map?.fitBounds(bounds, {
            padding: 200
        })
        //polyline
        const sourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: coords
                    }
                }]
            }
        }
        // remover polyline si existe
        if (state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
        }

        state.map?.addSource('RouteString', sourceData);
        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                "line-color": 'black',
                "line-width": 3

            }
        })

    }
    return (
        <MapContext.Provider value={{
            ...state,
            setMap,
            getRouteBetweenPoints
        }}>
            {children}
        </MapContext.Provider>
    )
}
