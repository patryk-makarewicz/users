import MainLayout from '@/layouts/main';
import { wrapper } from '@/state/store';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

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
// 2. only ssr or mix with static?
// 3. clear models
// 4. no data on deploy version
// 5. change paths in head to vercel urls
