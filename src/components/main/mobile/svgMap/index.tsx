// React imports
import { useRef } from 'react';

// App imports
import { Hexagons } from './hexagons';
import { SVGWrapper } from './svg';
import { Location } from './location';
import { Pin } from './pin';
import './styles.scss';

// Context imports
import { usePolygonApi } from '../../../context/api/polygon';
import { useSvgMapSizes } from '../../../context/sizes/bottom/svgMap';
import { useGeo } from '../../../context/filters/geo';
import { useReverseGeocodingApi } from '../../../context/api/google/reverse';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const svgContainerRef = useRef<any>(null);

	const { polygonData } = usePolygonApi();
	const { innerWidth, innerHeight } = useSvgMapSizes();
	const { placeCoordinates, setPlaceCoordinates } = useGeo();
	const { currentAddress } = useReverseGeocodingApi();

	if (!polygonData || !polygonData[0]) return (<></>)

	const city = polygonData[0].city_geom[0];

	const projection = d3.geoIdentity()
		.reflectY(true)
		.fitSize([ innerWidth, innerHeight ], city)

	const path = d3.geoPath(projection);

	const onClick = (e: any) => {
		const rect = svgContainerRef.current.getBoundingClientRect();
		const adjustedCoordinates: any = [e.clientX - rect.left, e.clientY - rect.top];
	    const [lng, lat]: any = projection.invert(adjustedCoordinates);
	    setPlaceCoordinates({ latitude: lat, longitude: lng });
	}

	const pinCoordinates: any = projection([placeCoordinates.longitude, placeCoordinates.latitude]);

	return (
		<div className="mobile-airbnb-item-wrapper">
			<div style={{display: "grid", gridTemplateColumns: "20px auto 20px"}}>
				<div></div>
				<div ref={svgContainerRef}>
					<SVGWrapper>
						<g onClick={onClick}>
							<Hexagons path={path}/>
							<Pin pinCoordinates={pinCoordinates}/>
						</g>
					</SVGWrapper>
				</div>
				<div></div>
			</div>
			<Location currentAddress={currentAddress}/>
		</div>
	)
}

SvgMap.displayName="SvgMap";