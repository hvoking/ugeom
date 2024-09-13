// React imports
import { useState, useRef, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../../filters/geo';

const MapboxContext: React.Context<any> = createContext(null);

export const useMapbox = () => {
  return (
    useContext(MapboxContext)
  )
}

export const MapboxProvider = ({children}: any) => {
  const [ currentBasemap, setCurrentBasemap ] = useState("mapbox://styles/generativa/clhqor7c101lh01pe52myfwik");
  const { viewport, setMarker } = useGeo();

  const mapRef = useRef<any>();
  const pdfMapRef = useRef<any>();

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [ viewport.longitude, viewport.latitude ],
      zoom: viewport.zoom,
      duration: 3000, 
      essential: true,
    });

    pdfMapRef.current?.flyTo({
      center: [ viewport.longitude, viewport.latitude ],
      zoom: viewport.zoom,
      duration: 3000, 
      essential: true,
    });

    setMarker({
      longitude: viewport.longitude, 
      latitude: viewport.latitude
    })
  }, [ viewport ]);
  
  return (
    <MapboxContext.Provider value={{ 
      mapRef, pdfMapRef,
      currentBasemap, setCurrentBasemap,
    }}>
      {children}
    </MapboxContext.Provider>
  )
}

MapboxContext.displayName="MapboxContext";