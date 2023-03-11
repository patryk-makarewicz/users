import type { AppProps } from 'next/app';
import { wrapper } from 'src/state/store';
import '../../i18n';

import MainLayout from '../layouts/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
