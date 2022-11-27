import { useContext, useState } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import {  MapContext } from '../context/map/MapContext';
import { LoadingPlaces, } from './LoadingPlaces';

export const SearchResult = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);
    const [activeId, setactiveId] = useState('');
    const onPlaceClicked = (place) => {
        const [lng, lat] = place.center;
        setactiveId(place.id)
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute = (place) => {

        if (!userLocation) return;
        const [lng, lat] = place.center;
      //  getRouteBetweenPoints(userLocation, [lng, lat]);
    }

    if (isLoadingPlaces) {
        return (
            <LoadingPlaces />
        )
    }
    if (places.length === 0) {
        return <></>;
    }
    return (
        <ul className="list-group mt-3">
            {
                places.map(place => (
                    <li
                        key={place.id}
                        className={`list-group-item list-group-item-action pointer ${(place.id === activeId) && 'active'}`}
                        onClick={() => onPlaceClicked(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p
                            style={{ fontSize: '12px' }}
                        >
                            {place.place_name}
                        </p>
                        <button
                            className={`btn btn-sm ${(activeId === place.id) ? 'btn-outline-light' : 'btn-outline-primary'}`}
                            onClick={() => getRoute(place)}
                        >
                            Direcciones
                        </button>
                    </li>
                ))
            }


        </ul>
    )
}
