// React imports
import { useContext, createContext } from 'react';

// Third party imports
import type { LayerProps } from 'react-map-gl';

const EducationClustersContext: React.Context<any> = createContext(null);

export const useEducationClusters = () => {
  return (
    useContext(EducationClustersContext)
  )
}

export const EducationClustersProvider = ({children}: any) => {
  const educationClusterLayer: LayerProps = {
    id: 'education-clusters',
    type: 'circle',
    source: 'education-clusters',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step', ['get', 'point_count'], 
        'rgba(255, 0, 0, 0.6)', 100, 
        'rgba(255, 0, 0, 0.8)', 750, 
        'rgba(255, 0, 0, 1)'
      ],
      'circle-radius': [
        'step', ['get', 'point_count'], 
        10, 100, 
        15, 750, 
        20
      ]
    }
  };

  const educationClusterCountLayer: LayerProps = {
    id: 'education-cluster-count',
    type: 'symbol',
    source: 'education-clusters',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-size': 12
    }
  };
  
  return (
    <EducationClustersContext.Provider value={{ educationClusterLayer, educationClusterCountLayer }}>
      {children}
    </EducationClustersContext.Provider>
  )
}

EducationClustersContext.displayName="EducationClustersContext";