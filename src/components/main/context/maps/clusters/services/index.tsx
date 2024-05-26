// React imports
import { useContext, createContext } from 'react';

// Third party imports
import type { LayerProps } from 'react-map-gl';

const ServicesClustersContext: React.Context<any> = createContext(null);

export const useServicesClusters = () => {
  return (
    useContext(ServicesClustersContext)
  )
}

export const ServicesClustersProvider = ({children}: any) => {
  const servicesClusterLayer: LayerProps = {
    id: 'services-clusters',
    type: 'circle',
    source: 'services-clusters',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step', ['get', 'point_count'], 
        'rgba(0, 201, 126, 0.6)', 100, 
        'rgba(0, 201, 126, 0.8)', 750, 
        'rgba(0, 201, 126, 1)'
      ],
      'circle-radius': [
        'step', ['get', 'point_count'], 
        10, 100, 
        15, 750, 
        20
      ]
    }
  };

  const servicesClusterCountLayer: LayerProps = {
    id: 'services-cluster-count',
    type: 'symbol',
    source: 'services-clusters',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-size': 12
    }
  };
  
  return (
    <ServicesClustersContext.Provider value={{ 
      servicesClusterLayer,
      servicesClusterCountLayer,
    }}>
      {children}
    </ServicesClustersContext.Provider>
  )
}

ServicesClustersContext.displayName="ServicesClustersContext";