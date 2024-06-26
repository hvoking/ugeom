// App imports
import './styles.scss';

// Context imports
import { useMapbox } from '../../../../context/maps/mapbox';

export const BasemapsSelectors = () => {
	const { currentBasemap, setCurrentBasemap } = useMapbox();

	return (
		<div className="pdf-basemaps">
			<div className="pdf-basemaps-image"/>
		</div>
	)
}

BasemapsSelectors.displayName="BasemapsSelectors";