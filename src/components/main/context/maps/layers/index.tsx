// App imports
import { IsoLayerProvider } from './iso';

export const LayersProvider = ({children}: any) => {
  return (
    <IsoLayerProvider>
      {children}
    </IsoLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";