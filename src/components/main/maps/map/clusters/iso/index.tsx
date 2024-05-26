// Context imports
import { useIsoLayer } from '../../../../context/maps/layers/iso';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const IsoPolygon = () => {
	const { isoLayer, isoSource } = useIsoLayer();
	
	return (
		<Source id="isoSource" {...isoSource}>
			<Layer {...isoLayer}/>
		</Source>
	)
}