// App imports
import { Row } from './row';

export const Header = ({ setSortKey, setCurrentDirection }: any) => {

	return (
		<thead> 
			<tr>
				<th>#</th>
				<th>Thumbnail</th>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					item="distance"
				/>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					item="price" 
				/>
			</tr>
		</thead> 
	)
}

Header.displayName="Header";