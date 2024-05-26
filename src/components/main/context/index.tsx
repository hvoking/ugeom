// App imports
import { FiltersProvider } from './filters';
import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { SizesProvider } from './sizes';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <SizesProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </SizesProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";