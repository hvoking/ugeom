// React imports
import { useState } from 'react';

// App imports
import { Body } from './body';
import { Header } from './header';
import './styles.scss';

export const Table = () => {
	const [ sortKey, setSortKey ] = useState<any>(null);
	const [ currentDirection, setCurrentDirection ] = useState<any>(null);
	const [ activeSort, setActiveSort ] = useState(false);

	return (
		<div className="fixTableHead"> 
			<table>
				<Header 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					setActiveSort={setActiveSort}
				/>
				<Body sortKey={sortKey} currentDirection={currentDirection} activeSort={activeSort}/>
			</table>
		</div>
	)
}

Table.displayName="Table";