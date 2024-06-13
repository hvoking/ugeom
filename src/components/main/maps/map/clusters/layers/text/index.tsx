// Third party imports
import type { LayerProps } from 'react-map-gl';

// Text
export const servicesClusterText: LayerProps = {
  id: 'services-cluster-count',
  type: 'symbol',
  source: 'services-clusters',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};
export const educationClusterText: LayerProps = {
  id: 'education-cluster-count',
  type: 'symbol',
  source: 'education-clusters',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};
export const foodClusterText: LayerProps = {
  id: 'food-cluster-count',
  type: 'symbol',
  source: 'food-clusters',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};
export const researchClusterText: LayerProps = {
  id: 'research-cluster-count',
  type: 'symbol',
  source: 'research-clusters',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};
export const retailClusterText: LayerProps = {
  id: 'retail-cluster-count',
  type: 'symbol',
  source: 'retail-clusters',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
};