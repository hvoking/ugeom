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