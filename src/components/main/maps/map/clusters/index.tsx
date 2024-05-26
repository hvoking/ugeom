// Context imports
import { useCnpjApi } from '../../../context/api/cnpj';
import { useResearchClusters } from '../../../context/maps/clusters/research';
import { useFoodClusters } from '../../../context/maps/clusters/food';
import { useEducationClusters } from '../../../context/maps/clusters/education';
import { useServicesClusters } from '../../../context/maps/clusters/services';
import { useRetailClusters } from '../../../context/maps/clusters/retail';

// App imports
import { Unclustered } from './unclustered';
import { Clustered } from './clustered';
import { IsoPolygon } from './iso';

export const Clusters = () => {
	const { cnpjData, cnpjProperties } = useCnpjApi();
	const { researchClusterLayer, researchClusterCountLayer } = useResearchClusters();
	const { foodClusterLayer, foodClusterCountLayer } = useFoodClusters();
	const { educationClusterLayer, educationClusterCountLayer } = useEducationClusters();
	const { servicesClusterLayer, servicesClusterCountLayer } = useServicesClusters();
	const { retailClusterLayer, retailClusterCountLayer } = useRetailClusters();

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
				countLayer={researchClusterCountLayer}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="alimentacao"
				clusterLayer={foodClusterLayer}
				countLayer={foodClusterCountLayer}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="educacao"
				clusterLayer={educationClusterLayer}
				countLayer={educationClusterCountLayer}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="servicos"
				clusterLayer={servicesClusterLayer}
				countLayer={servicesClusterCountLayer}
			/>
			<Clustered
				cnpjData={cnpjData} 
				cnpjProperties={cnpjProperties} 
				getLabel={getLabel}
				label="varejo"
				clusterLayer={retailClusterLayer}
				countLayer={retailClusterCountLayer}
			/>
		</>
	)
}

Clusters.displayName="Clusters";