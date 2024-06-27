// App imports
import { Arrow } from './arrow';

export const Row = ({ setSortKey, setCurrentDirection, item }: any) => {
	return (
		<th>
			<div style={{position: "relative"}}>
				<div>{item}</div>
				<Arrow 
					fill={"rgba(0, 0, 0, 0.4)"} 
					item={item} 
					setSortKey={setSortKey} 
					setCurrentDirection={setCurrentDirection}
				/>
			</div>
		</th>
	)
}

Row.displayName="Row";