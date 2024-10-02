// React imports
import { useCallback } from 'react';

// App imports
import { MapControllers } from './controllers';
import { Pin } from './pin';
import { Tooltip } from './tooltip';
import { Buildings } from './buildings';
import { Layers } from './layers';
import { Isochrone } from './isochrone';

// Context imports
import { useMapbox } from '../../../context/maps/mapbox';
import { useGeo } from '../../../context/filters/geo';
import { useIsochroneApi } from '../../../context/api/isochrone';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setMarker, setPlaceCoordinates } = useGeo();
	const { setInitialMarker } = useIsochroneApi();

	const onDblClick = useCallback((event: any) => {
		const lng = event.lngLat.lng;
		const lat = event.lngLat.lat;
		setInitialMarker(false);
		setPlaceCoordinates({ longitude: lng, latitude: lat });
		setMarker({ longitude: lng, latitude: lat });
	}, []);

	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
			mapStyle={currentBasemap}
			onDblClick={onDblClick}
			doubleClickZoom={false}
			antialias={true}
			preserveDrawingBuffer={true}
		>
			<Isochrone/>
			<Layers/>
			<Pin/>
			<Buildings/>
			<MapControllers/>
			<Tooltip/>
		</Map>
	)
}

MapContainer.displayName="MapContainer";