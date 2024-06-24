// React imports
import { useState } from 'react';

// App imports
import { Carousel, CarouselItem } from './carousel';
import { Header } from './header';
import { Prices } from './prices';
import { Timeseries } from './timeseries';
import { Description } from './description';
import { SvgMap } from './svgMap';
import './styles.scss';

// Context imports
import { usePricesApi } from '../context/api/imoveis/prices';

export const Mobile = () => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const { pricesData } = usePricesApi();
;
	if (!pricesData) return (
		<Description/>		
	)

	return (
		<div className="bottom">
			<Header activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
			<Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
				<CarouselItem>
					<SvgMap/>
				</CarouselItem>
				<CarouselItem>
					<Prices pricesData={pricesData}/>
				</CarouselItem>
				<CarouselItem>
					<Timeseries/>
				</CarouselItem>
			</Carousel>
		</div>
	)
}

Mobile.displayName="Mobile"