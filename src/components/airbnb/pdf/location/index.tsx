// Context imports
import { useReverseGeocodingApi } from '../../context/api/google/reverse';

export const Location = () => {
	const { currentAddress } = useReverseGeocodingApi();

	return (
		<div style={{display: "flex", gap: "10px", paddingLeft: "5px"}}>
			<img 
				src="static/components/maps/marker.svg" 
				alt="marker" 
				width="10px"
			/>
			<div>{currentAddress}</div>
		</div>
	)
}

Location.displayName="Location";