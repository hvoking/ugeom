// App Imports
import { Logo } from './logo';
import { Prices } from './prices';
import { Table } from './table';
import { PdfMaps } from './maps';
import { Chat } from './chat';
import { Cross } from './cross';
import { Location } from './location';
import './styles.scss';

// Context imports
import { usePdf } from '../context/filters/pdf';

export const UserPdf = () => {
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
				className="airbnb-pdf-wrapper" 
				onClick={() => setActivePdf(false)}
				tabIndex={0}
			>
				<div 
					className="airbnb-pdf" 
					onClick={(e: any) => e.stopPropagation()}
					ref={page1Ref}
				>
					<div className="airbnb-pdf-body">
						<Cross setActivePdf={setActivePdf}/>
						<Logo/>
						<Location/>
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