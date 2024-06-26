// App Imports
import { Prices } from './prices';
import { Table } from './table';
import { PdfMaps } from './maps';
import { Chat } from './chat';
import './styles.scss';

// Context imports
import { useLinesApi } from '../../context/api/imoveis/lines';
import { usePricesApi } from '../../context/api/imoveis/prices';
import { useReverseGeocodingApi } from '../../context/api/google/reverse';


export const Page1 = ({ page1Ref, setActivePdf }: any) => {
	const { linesData } = useLinesApi();
	const { pricesData } = usePricesApi();
	const { currentAddress } = useReverseGeocodingApi();

	if (!linesData || !pricesData) return <></>

	return (
		<div 
			className="user-pdf-first-page" 
			onClick={(e: any) => e.stopPropagation()}
			ref={page1Ref}
		>
			<div className="airbnb-pdf-body">
				<img
					className="pdf-exit-cancel-cross"
					src="static/components/search/cancel_search.svg" 
					alt="cancel-cross-icon"
					onClick={() => setActivePdf(false)}
				/>
				<div className="logo-wrapper" style={{paddingBottom: "20px", paddingLeft: "5px", paddingTop: "10px"}}>
					<img 
						className="logo"
						src="static/logos/pink.svg" 
						alt="header-logo"
					/>
					<div className="logo-name" style={{paddingLeft: "8px", color: "rgba(0, 0, 0, 1)"}}>Airbnb Metrics</div>
				</div>
				<div style={{display: "flex", gap: "10px", paddingLeft: "5px"}}>
					<img 
						src="static/components/maps/marker.svg" 
						alt="marker" 
						width="10px"
					/>
					<div>Property Location</div>
					<div>{currentAddress}</div>
				</div>
				<PdfMaps/>
				<Chat/>
				<Table linesData={linesData} pricesData={pricesData}/>
				<Prices/>
			</div>
		</div>
	)
}

Page1.displayName="Page1";