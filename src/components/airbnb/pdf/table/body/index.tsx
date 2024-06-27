// Context imports
import { usePropertyType } from '../../../context/filters/property';
import { usePrices } from '../../../context/filters/prices';
import { useDates } from '../../../context/filters/dates';
import { useTooltip } from '../../../context/maps/tooltip';
import { useLinesLimits } from '../../../context/limits/lines';
import { useLinesApi } from '../../../context/api/imoveis/lines';
import { usePricesApi } from '../../../context/api/imoveis/prices';

// Third-party imports
import * as d3 from 'd3';

export const Body = ({ sortKey, currentDirection }: any) => {
	const { rejectedIds, setRejectedIds, setCurrentPropertyId, nearest } = usePropertyType();
	const { leftPosition, rightPosition } = usePrices();
	const { startDate, finalDate } = useDates();
	const { setPropertyInfo, setActivePropertyInfo } = useTooltip();
	const { bottomLimit, topLimit } = useLinesLimits();
	const { linesData } = useLinesApi();
	const { pricesData } = usePricesApi();

	const startDateParts = startDate.split("-");
	const currentStartDate = new Date(`${startDateParts[2]}-${startDateParts[1]}-${startDateParts[0]}`);

	const finalDateParts = finalDate.split("-");
	const currentFinalDate = new Date(`${finalDateParts[2]}-${finalDateParts[1]}-${finalDateParts[0]}`);

	const siFormat = d3.format(",");

	const filterByPrices = pricesData.filter((d: any) => {
		return (leftPosition < d['price'] && d['price'] < rightPosition)
	});

  	const filterByDates = filterByPrices && filterByPrices.filter((d: any) => {  		
  		return currentStartDate < new Date(d.start_date) && new Date(d.start_date) < currentFinalDate
  	});
	
	const filterById = filterByDates.filter((item: any) => !rejectedIds.includes(item.property_id));
	
	currentDirection === "up" ?
	filterById.sort((a: any, b: any) => b[sortKey] - a[sortKey]) :
	filterById.sort((a: any, b: any) => a[sortKey] - b[sortKey]);

	const onClick = (e: any, item: any) => {
		setCurrentPropertyId(item.property_id);
		setPropertyInfo(item);
		setActivePropertyInfo(true)
	}

	// const rejectId = (e: any, item: any) => {
	// 	e.stopPropagation();
	// 	const currentValue = item.property_id;
	// 	setRejectedIds((prev: any) => [...prev, currentValue]);
	// }

	// onClick={(e: any) => rejectId(e, item)}
	return (
		<tbody> 
			{filterById.slice(0, nearest).map((item: any, index: any) => {
				const distance = (Math.round(item.distance * 10000 * 10) / 10).toString().replace(".", ",");
				const currentPrice = siFormat(Math.round(item.price)).replace(",", ".");

				return (
					<tr key={index} onClick={(e: any) => onClick(e, item)}>
						<td>
							<div 
								style={{
									backgroundColor: 
										item['price'] < bottomLimit ? 
										"rgba(255, 0, 0, 1)" :
										item['price'] > topLimit ? 
										"rgba(166, 166, 244, 1)" :
										"rgba(67, 181, 64, 1)"
								}}
							>
								{index + 1}
							</div>
						</td>
						<td>
							<img 
								src={item.image_src}
								alt="property"
								width="55"
								height="45"
								loading="lazy"
							/>
						</td>
						<td>{distance} m</td>
						<td>{currentPrice} £</td>
					</tr>
				)}
			)}
		</tbody> 
	)
}

Body.displayName="Body";