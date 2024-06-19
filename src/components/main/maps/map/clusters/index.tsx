// Context imports
import { createClusterLayer } from './layers';
import { createClusterTextLayer } from './layers/text';

// App imports
import { Clustered } from './clustered';

export const Clusters = () => {
	const researchClusterLayer = createClusterLayer('research', 'rgba(51, 106, 239, ');
	const researchClusterText = createClusterTextLayer('research');

	const foodClusterLayer = createClusterLayer('food', 'rgba(255, 173, 158, ');
	const foodClusterText = createClusterTextLayer('food');

	const educationClusterLayer = createClusterLayer('education', 'rgba(255, 0, 0, ');
	const educationClusterText = createClusterTextLayer('education');

	const servicesClusterLayer = createClusterLayer('services', 'rgba(0, 201, 126, ');
	const servicesClusterText = createClusterTextLayer('services');

	const retailClusterLayer = createClusterLayer('retail', 'rgba(253, 188, 85, ');
	const retailClusterText = createClusterTextLayer('retail');

	return (
		<>
			<Clustered
				label="pesquisa"
				clusterLayer={researchClusterLayer}
				countLayer={researchClusterText}
			/>
			<Clustered 
				label="alimentacao"
				clusterLayer={foodClusterLayer}
				countLayer={foodClusterText}
			/>
			<Clustered
				label="educacao"
				clusterLayer={educationClusterLayer}
				countLayer={educationClusterText}
			/>
			<Clustered
				label="servicos"
				clusterLayer={servicesClusterLayer}
				countLayer={servicesClusterText}
			/>
			<Clustered
				label="varejo"
				clusterLayer={retailClusterLayer}
				countLayer={retailClusterText}
			/>
		</>
	)
}

Clusters.displayName="Clusters";