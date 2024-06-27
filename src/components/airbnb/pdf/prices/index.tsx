// App imports
import './styles.scss';

// Context imports
import { usePrices } from '../../context/filters/prices';

export const Prices = () => {
	const { samplesPrices } = usePrices();

	const mean = (arr: any) => {
	    if (arr.length === 0) return 0;
	    const filteredArr = arr.filter(Number.isFinite); // Remove non-numeric values
	    if (filteredArr.length === 0) return 0; // Handle case where all values are non-numeric
	    const sum = filteredArr.reduce((acc: any, val: any) => acc + val, 0);
	    return sum / filteredArr.length;
	};

	const meanValue = samplesPrices && Math.round(mean(samplesPrices))

	return (
		<div className="evaluation-wrapper">
			<div style={{display: "flex", alignItems: "center", gap: "7px"}}>
				<div>Optimal night stay price</div>
				<div className="evaluation-value">{meanValue} £</div>
			</div>
			<div style={{display: "flex", gap: "5px"}}>
				<div>Data source: </div>
				<a 
					href="https://insideairbnb.com/london/"
					style={{display: "table-cell"}}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div>Inside Airbnb</div>
				</a>
			</div>
		</div>
	)
}

Prices.displayName="Prices";