// App imports
import { MapboxProvider } from './mapbox';
import { LayersProvider } from './layers';
import { ClustersProvider } from './clusters';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <LayersProvider>
    <ClustersProvider>
      {children}
    </ClustersProvider>
    </LayersProvider>
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";