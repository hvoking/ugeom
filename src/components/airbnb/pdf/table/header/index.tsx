// App imports
import { Row } from './row';

export const Header = ({ setSortKey, setCurrentDirection, setActiveSort }: any) => {

	const onClick = () => {
		setActiveSort(true);
	}

	return (
		<thead> 
			<tr onClick={onClick}>
				<th>#</th>
				<th>Thumbnail</th>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					title="distance"
					item="distance"
				/>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					title="price" 
					item="price" 
				/>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					title="rating" 
					item="review_scores_rating" 
				/>
				<Row 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection} 
					title="reviews" 
					item="number_of_reviews" 
				/>
			</tr>
		</thead> 
	)
}

Header.displayName="Header";