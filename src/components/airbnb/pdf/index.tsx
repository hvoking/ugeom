// App Imports
import { Prices } from './prices';
import { Table } from './table';
import { PdfMaps } from './maps';
import { Chat } from './chat';
import './styles.scss';

// Context imports
import { usePdf } from '../context/filters/pdf';
import { useReverseGeocodingApi } from '../context/api/google/reverse';


export const UserPdf = () => {
	const { currentAddress } = useReverseGeocodingApi();

	const { page1Ref, activePdf, setActivePdf } = usePdf();

	let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {

		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (<>
			{activePdf && 
			<div 
					className="user-pdf" 
					onClick={() => setActivePdf(false)}
					tabIndex={0}
				>
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
				<Table/>
				<Prices/>
			</div>
		</div>
		</div>
		}
		</>
	)
}

UserPdf.displayName="UserPdf";