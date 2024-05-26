// React imports
import { useContext, createContext } from 'react';

// Third party imports
import type { LayerProps } from 'react-map-gl';

const FoodClustersContext: React.Context<any> = createContext(null);

export const useFoodClusters = () => {
  return (
    useContext(FoodClustersContext)
  )
}

export const FoodClustersProvider = ({children}: any) => {
  const foodClusterLayer: LayerProps = {
    id: 'food-clusters',
    type: 'circle',
    source: 'food-clusters',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step', ['get', 'point_count'], 
        'rgba(255, 173, 158, 0.6)', 100, 
        'rgba(255, 173, 158, 0.8)', 750, 
        'rgba(255, 173, 158, 1)'
      ],
      'circle-radius': [
        'step', ['get', 'point_count'], 
        10, 100, 
        15, 750, 
        20
      ]
    }
  };

  const foodClusterCountLayer: LayerProps = {
    id: 'food-cluster-count',
    type: 'symbol',
    source: 'food-clusters',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-size': 12
    }
  };
  
  return (
    <FoodClustersContext.Provider value={{ 
      foodClusterLayer,
      foodClusterCountLayer,
    }}>
      {children}
    </FoodClustersContext.Provider>
  )
}

FoodClustersContext.displayName="FoodClustersContext";