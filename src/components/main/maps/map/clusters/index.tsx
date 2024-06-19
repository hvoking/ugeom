// Context imports
import { useCnpjApi } from '../../../context/api/cnpj';

import { createClusterLayer } from './layers';
import { createClusterTextLayer } from './layers/text';

// App imports
import { Clustered } from './clustered';

export const Clusters = () => {
	const { cnpjData, cnpjProperties } = useCnpjApi();

	const getLabel: any = (object: any, value: any) => {
		const currentKey: any = Object.keys(object).find(
			key => object[key].label === value
		)
		if (object[currentKey]) {
			return currentKey
		}
		return false
	}

	const servicesClusterLayer = createClusterLayer('services', 'rgba(0, 201, 126, ');
	const educationClusterLayer = createClusterLayer('education', 'rgba(255, 0, 0, ');
	const foodClusterLayer = createClusterLayer('food', 'rgba(255, 173, 158, ');
	const researchClusterLayer = createClusterLayer('research', 'rgba(51, 106, 239, ');
	const retailClusterLayer = createClusterLayer('retail', 'rgba(253, 188, 85, ');

	const servicesClusterText = createClusterTextLayer('services');
	const educationClusterText = createClusterTextLayer('education');
	const foodClusterText = createClusterTextLayer('food');
	const researchClusterText = createClusterTextLayer('research');
	const retailClusterText = createClusterTextLayer('retail');

	return (
		<>
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