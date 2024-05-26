// React imports
import { useCallback } from 'react';

// App imports
import { Pin } from './pin';
import { Clusters } from './clusters';

// Layers imports
import { useCitiesLayer } from '../../context/maps/layers/cities';

// Context imports
import { useMapbox } from '../../context/maps/mapbox';
import { useGeo } from '../../context/filters/geo';

// Third-party imports
import { Map, useControl } from 'react-map-gl';
import { DeckProps } from '@deck.gl/core/typed';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import 'mapbox-gl/dist/mapbox-gl.css';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const MapContainer = () => {
	const { viewport, setMarker, setPlaceCoordinates } = useGeo();
	const { mapRef, basemap } = useMapbox();

	// Layers
	const { citiesLayer } = useCitiesLayer();

	const layers: any = [ citiesLayer ];

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		
		setPlaceCoordinates({ longitude: lng, latitude: lat });
		setMarker({ longitude: lng, latitude: lat });
	}, []); 

	return (
		<Map
			ref={mapRef}
			initialViewState={viewport}
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
			mapStyle={basemap}
			onDblClick={onDblClick}
			doubleClickZoom={false}
			preserveDrawingBuffer={true}
		>
			<DeckGLOverlay layers={layers}/>
			<Pin/>
			<Clusters/>
		</Map>
	)
}

MapContainer.displayName="Mapcontainer";