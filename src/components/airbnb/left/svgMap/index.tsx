// React imports
import { useRef } from 'react';

// App imports
import { Hexagons } from './hexagons';
import { SVGWrapper } from './svg';
import { Location } from './location';
import './styles.scss';

// Context imports
import { usePolygonApi } from '../../context/api/polygon';
import { useIsoPolygonApi } from '../../context/api/isoPolygon';
import { useSvgMapSizes } from '../../context/sizes/svgMap';
import { useGeo } from '../../context/filters/geo';
import { useReverseGeocodingApi } from '../../context/api/google/reverse';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const svgContainerRef = useRef<any>(null);

	const { polygonData } = usePolygonApi();
	const { isoPolygonData } = useIsoPolygonApi();
	const { innerWidth, innerHeight } = useSvgMapSizes();
	const { placeCoordinates, setPlaceCoordinates } = useGeo();
	const { currentAddress } = useReverseGeocodingApi();

	if (!isoPolygonData || !polygonData || !polygonData[0]) return (<></>)

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
		<div className="airbnb-svgmap-wrapper">
			<div className="sidebar-sub-title">Location</div>
			<div style={{display: "grid", gridTemplateColumns: "20px auto 20px"}}>
				<div></div>
				<div ref={svgContainerRef}>
					<SVGWrapper>
						<g onClick={onClick}>
							<Hexagons path={path}/>
							<image
							  x={pinCoordinates[0] - 4}
							  y={pinCoordinates[1] - 10}
							  width={8}
							  height={12}
							  href="static/components/maps/marker.svg"
							  className="pin-marker"
							/>
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