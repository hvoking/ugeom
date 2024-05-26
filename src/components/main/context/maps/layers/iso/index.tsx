// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useIsoPolygonApi } from '../../../api/isoPolygon';

// Third-party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { GeoJsonLayer } from 'deck.gl';

const IsoLayerContext: React.Context<any> = createContext(null);

export const useIsoLayer = () => {
	return (
		useContext(IsoLayerContext)
	)
}

export const IsoLayerProvider = ({children}: any) => {
	const { isoPolygonData } = useIsoPolygonApi();

	const isoLayer = {
	    id: 'isolayer',
	    type: 'fill',
	    source: 'isoSource',
	    paint: {
	      'fill-color': 'rgb(222, 112, 112)',
	      'fill-opacity': 0.8,
	    },
	  };

	const isoSource = {
	    type: 'geojson',
	    data: {
	      type: 'FeatureCollection',
	      features: [
	        {
	          type: 'Feature',
	          geometry: {
	            type: 'Polygon',
	            coordinates: isoPolygonData ? 
	            isoPolygonData.features[0].geometry.coordinates
	            : [],
	          },
	        },
	      ],
	    },
	  };

	return (
		<IsoLayerContext.Provider value={{ isoLayer, isoSource }}>
			{children}
		</IsoLayerContext.Provider>
	)
}

IsoLayerContext.displayName = "IsoLayerContext";