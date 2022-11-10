import React from 'react';
import { MapProvider } from '../context/map/MapProvider';
import { PlacesProvider } from '../context/places/PlacesProvider';
import './styles.css';
import {MapView} from '../components/MapView';
import { BtnMyLocation } from '../components/BtnMyLocation';
import { ReactLogo } from '../components/ReactLogo';
import { SearchBar } from '../components/SearchBar';

export const Mapa = () => {
  return (
    <div>
      <PlacesProvider>
        <MapProvider>
          <MapView />
          <BtnMyLocation />
          <ReactLogo />
          <SearchBar />
        </MapProvider>
      </PlacesProvider>

    </div>
  )
}
