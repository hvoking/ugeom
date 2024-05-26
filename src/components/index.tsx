// App imports
import { Main } from './main';
import { Wrapper } from './wrapper';

// Context imports
import { MainProvider } from './main/context';

export const Business = () => {
  return (
        <MainProvider>
          <Wrapper>
            <Main/>
          </Wrapper>
        </MainProvider>
  );
}

Business.displayName="Business";