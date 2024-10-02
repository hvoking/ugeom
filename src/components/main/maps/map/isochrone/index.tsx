// Context imports
import { useIsochroneApi } from '../../../../context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = () => {
	const { isochroneData } = useIsochroneApi();

	const isoLayer: any = {
	    id: 'isolayer',
	    type: 'fill',
	    source: 'isoSource',
	    paint: {
	      'fill-color': 'rgb(222, 112, 112)',
	      'fill-opacity': 0.2,
	    },
	  };

	const isoSource: any = {
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
		<Source id="isoSource" {...isoSource}>
			<Layer {...isoLayer}/>
		</Source>
	)
}