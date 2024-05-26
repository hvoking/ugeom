// App imports
import { CitiesLayerProvider } from './cities';
import { IsoLayerProvider } from './iso';

export const LayersProvider = ({children}: any) => {
  return (
    <CitiesLayerProvider>
    <IsoLayerProvider>
      {children}
    </IsoLayerProvider>
    </CitiesLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";