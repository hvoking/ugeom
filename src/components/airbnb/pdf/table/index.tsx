// React imports
import { useState } from 'react';

// App imports
import { Body } from './body';
import { Header } from './header';
import './styles.scss';

export const Table = () => {
	const [ sortKey, setSortKey ] = useState("distance");
	const [ currentDirection, setCurrentDirection ] = useState("up");

	return (
		<div className="fixTableHead"> 
			<table>
				<Header 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
				/>
				<Body 
					sortKey={sortKey} 
					currentDirection={currentDirection}
				/>
			</table>
		</div>
	)
}

Table.displayName="Table";