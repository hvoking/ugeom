// React imports
import { useContext, createContext } from 'react';

// Third party imports
import type { LayerProps } from 'react-map-gl';

const ResearchClustersContext: React.Context<any> = createContext(null);

export const useResearchClusters = () => {
  return (
    useContext(ResearchClustersContext)
  )
}

export const ResearchClustersProvider = ({children}: any) => {
  const researchClusterLayer: LayerProps = {
    id: 'research-clusters',
    type: 'circle',
    source: 'research-clusters',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step', ['get', 'point_count'], 
        'rgba(51, 106, 239, 0.6)', 100, 
        'rgba(51, 106, 239, 0.8)', 750, 
        'rgba(51, 106, 239, 1)'
      ],
      'circle-radius': [
        'step', ['get', 'point_count'], 
        10, 100, 
        15, 750, 
        20
      ]
    }
  };

  const researchClusterCountLayer: LayerProps = {
    id: 'research-cluster-count',
    type: 'symbol',
    source: 'research-clusters',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-size': 12
    }
  };
  
  return (
    <ResearchClustersContext.Provider value={{ 
      researchClusterLayer,
      researchClusterCountLayer,
    }}>
      {children}
    </ResearchClustersContext.Provider>
  )
}

ResearchClustersContext.displayName="ResearchClustersContext";