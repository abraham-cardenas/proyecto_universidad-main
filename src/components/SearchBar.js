import '../pages/styles.css';
import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResult } from './SearchResult';
export const SearchBar = () => {
    const debounceRef = useRef();

    const {searchPlacesByTerm, userLocation} = useContext(PlacesContext);

    const onQueryChange = (event) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            //TODO BUSCAR 
            console.log('debounce value:', event.target.value)
            searchPlacesByTerm(event.target.value);
        }, 350)
    }

    return (
        <div className='search-container'>
            <input
                type="text"
                className='form-control'
                placeholder='Buscar lugar..'
                onChange={onQueryChange}
            />
            <SearchResult/>
        </div>
    )
}
