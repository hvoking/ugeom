// App imports
import { MapboxProvider } from './mapbox';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
      {children}
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";