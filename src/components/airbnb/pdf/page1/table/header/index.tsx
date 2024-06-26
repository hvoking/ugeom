// App imports
import { Arrow } from './arrow';

export const Header = ({ setSortKey, setCurrentDirection }: any) => {
	return (
		<thead> 
			<tr>
				<th>#</th>
				<th>Thumbnail</th>
				<th>
					<div style={{position: "relative"}}>
						<div>Distance</div>
						<Arrow 
							fill={"rgba(0, 0, 0, 0.4)"} 
							item="distance" 
							setSortKey={setSortKey} 
							setCurrentDirection={setCurrentDirection}
						/>
					</div>
				</th>
				<th>
					<div style={{position: "relative"}}>
						<div>Price</div>
						<Arrow 
							fill={"rgba(0, 0, 0, 0.4)"} 
							item="price" 
							setSortKey={setSortKey} 
							setCurrentDirection={setCurrentDirection}
						/>
					</div>
				</th>
			</tr>
		</thead> 
	)
}

Header.displayName="Header";