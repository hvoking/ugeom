// Third party imports
import type { LayerProps } from 'react-map-gl';

export const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'cnpj-clusters',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': ['get', 'color'],
    'circle-radius': 5,
  }
};
export const educationClusterLayer: LayerProps = {
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
export const foodClusterLayer: LayerProps = {
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
export const researchClusterLayer: LayerProps = {
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
export const retailClusterLayer: LayerProps = {
  id: 'retail-clusters',
  type: 'circle',
  source: 'retail-clusters',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step', ['get', 'point_count'], 
      'rgba(253, 188, 85, 0.6)', 100, 
      'rgba(253, 188, 85, 0.8)', 750, 
      'rgba(253, 188, 85, 1)'
    ],
    'circle-radius': [
      'step', ['get', 'point_count'], 
      10, 100, 
      15, 750, 
      20
    ]
  }
};
export const servicesClusterLayer: LayerProps = {
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