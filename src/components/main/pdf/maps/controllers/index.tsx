// App imports
import { ReCenter } from './reCenter';
import './styles.scss';

// Context imports
import { useGeo } from '../../../../context/filters/geo';
import { useIsochroneApi } from '../../../../context/api/isochrone';

// Third party imports
import { NavigationControl } from 'react-map-gl';

export const MapControllers = () => {
	const { viewport, setViewport, placeCoordinates, setPlaceCoordinates } = useGeo();
	const { setInitialMarker } = useIsochroneApi();

	return (
		<>
			<NavigationControl/>
			<ReCenter
				setViewport={setViewport} 
				viewport={viewport} 
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

MapControllers.displayName="MapControllers";