import { Map } from "mapbox-gl";
import { useContext, useRef, useLayoutEffect } from "react";
import { MapContext } from '../context/map/MapContext';
import { PlacesContext } from '../context/places/PlacesContext';

import { Loading } from './Loading';

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef(null);
  const {setMap} = useContext(MapContext)

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading])



  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        left: 0,
        position: "fixed",
        top: 0,
        width: '100vw',
      }}
    >
      {userLocation?.join(',')}
    </div>
  )
}
