import { PlacesContext } from './PlacesContext';
import { useReducer, useEffect } from 'react';
import { placesReducer } from './placesReducer';
import searchApi from '../../api/searchApi';
import { getUserLocation } from '../../helpers/getUserLocation';


const INITIAL_STATE= {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}


export const PlacesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation().then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
    }, []);

    const searchPlacesByTerm = async (query) => {
        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] })
            return [];
        }

        if (!state.userLocation) throw new Error('No hay ubicación del usuario')
        dispatch({ type: 'setLoadingPlaces' });
        const resp = await searchApi.get(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });
        dispatch({ type: 'setPlaces', payload: resp.data.features });
        return resp.data.features;

    }


    return (
        <PlacesContext.Provider value={{
            ...state,

            //Methods
            searchPlacesByTerm
        }}>
            {children}
        </PlacesContext.Provider>
    )
}
