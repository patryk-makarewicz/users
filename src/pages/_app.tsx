import type { AppProps } from 'next/app';
import { wrapper } from 'src/state/store';

import MainLayout from 'src/layouts/main';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
