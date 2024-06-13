// Context imports
import { useCnpjApi } from '../../../context/api/cnpj';

import { researchClusterLayer, foodClusterLayer, educationClusterLayer, servicesClusterLayer, retailClusterLayer } from './layers';
import { researchClusterText, foodClusterText, educationClusterText, servicesClusterText, retailClusterText } from './layers/text';

// App imports
import { Unclustered } from './unclustered';
import { Clustered } from './clustered';
import { IsoPolygon } from './iso';

export const Clusters = () => {
	const { cnpjData, cnpjProperties } = useCnpjApi();

	const getColor: any = (object: any, value: any) => {
		const currentKey: any = Object.keys(object).find(
			key => object[key].label === value
		)
		if (object[currentKey]) {
			return object[currentKey].color
		}
		return "rgba(255, 255, 255, 0)"
	}

	const getLabel: any = (object: any, value: any) => {
		const currentKey: any = Object.keys(object).find(
			key => object[key].label === value
		)
		if (object[currentKey]) {
			return currentKey
		}
		return false
	}

	return (
		<>
			<IsoPolygon/>
			<Unclustered 
				cnpjData={cnpjData} 
				getColor={getColor} 
				getLabel={getLabel} 
				cnpjProperties={cnpjProperties}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="pesquisa"
				clusterLayer={researchClusterLayer}
				countLayer={researchClusterText}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="alimentacao"
				clusterLayer={foodClusterLayer}
				countLayer={foodClusterText}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="educacao"
				clusterLayer={educationClusterLayer}
				countLayer={educationClusterText}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="servicos"
				clusterLayer={servicesClusterLayer}
				countLayer={servicesClusterText}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="varejo"
				clusterLayer={retailClusterLayer}
				countLayer={retailClusterText}
			/>
		</>
	)
}

Clusters.displayName="Clusters";