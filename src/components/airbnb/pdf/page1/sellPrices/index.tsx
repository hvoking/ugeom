// App imports
import './styles.scss';

// Context imports
import { usePrices } from '../../../context/filters/prices';

// Third-party imports
import * as d3 from 'd3';

export const SellPrices = () => {
	const { samplesPrices } = usePrices();

	const mean = (arr: any) => {
	    if (arr.length === 0) return 0;
	    const filteredArr = arr.filter(Number.isFinite); // Remove non-numeric values
	    if (filteredArr.length === 0) return 0; // Handle case where all values are non-numeric
	    const sum = filteredArr.reduce((acc: any, val: any) => acc + val, 0);
	    return sum / filteredArr.length;
	};

	const siFormat = d3.format(",");


	const valorAnuncio = samplesPrices && siFormat(mean(samplesPrices)).replaceAll(",", ".")

	return (
		<div className="sell-prices-wrapper">
			<div>
				<div className="sell-prices-title">
					Mean price
				</div>
				<div className="sell-prices-subtitle">
					calculated based on the samples
				</div>
				<div className="sell-prices-price">
					{valorAnuncio} £
				</div>
			</div>
		</div>
	)
}

SellPrices.displayName="SellPrices";