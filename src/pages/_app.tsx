import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import MainLayout from '@/layouts/main';
import { wrapper } from '@/state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));

// ----- TODO -----
// 1. remove `any` from project
// 2. clear models
