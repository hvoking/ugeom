// App imports
import { RetailClustersProvider } from './retail';
import { ServicesClustersProvider } from './services';
import { FoodClustersProvider } from './food';
import { EducationClustersProvider } from './education';
import { ResearchClustersProvider } from './research';
import { CnpjClustersProvider } from './cnpj';

export const ClustersProvider = ({ children }: any) => {
  return (
    <CnpjClustersProvider>
    <RetailClustersProvider>
    <ServicesClustersProvider>
    <FoodClustersProvider>
    <EducationClustersProvider>
    <ResearchClustersProvider>
      {children}
    </ResearchClustersProvider>
    </EducationClustersProvider>
    </FoodClustersProvider>
    </ServicesClustersProvider>
    </RetailClustersProvider>
    </CnpjClustersProvider>
  )
}