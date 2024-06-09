// App imports
import { MapboxProvider } from './mapbox';
import { ClustersProvider } from './clusters';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <ClustersProvider>
      {children}
    </ClustersProvider>
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";