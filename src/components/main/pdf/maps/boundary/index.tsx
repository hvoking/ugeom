// Context imports
import { useIsochroneApi } from '../../../../context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Boundary = () => {
	const { isochroneData } = useIsochroneApi();

	const polygonLayer: any = {
	    id: 'polygonLayer',
	    type: 'fill',
	    source: 'polygonSource',
	    paint: {
	      'fill-color': 'rgb(222, 112, 112)',
	      'fill-opacity': 0.2,
	    },
	  };

	const polygonSource: any = {
	    type: 'geojson',
	    data: {
	      type: 'FeatureCollection',
	      features: [
	        {
	          type: 'Feature',
	          geometry: {
	            type: 'Polygon',
	            coordinates: 
	            	isochroneData ? 
	           		isochroneData.features[0].geometry.coordinates
	            	: [],
	          },
	        },
	      ],
	    },
	  };
	
	return (
		<Source id="polygonSource" {...polygonSource}>
			<Layer {...polygonLayer}/>
		</Source>
	)
}

Boundary.displayName="Boundary";