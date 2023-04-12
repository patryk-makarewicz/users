import type { AppProps } from 'next/app';
import { wrapper } from '@/state/store';

import MainLayout from '@/layouts/main';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));

// ----- TODO -----
// 1. locale: any
// 2. only ssr or mix with static?
// 3. remove netlify
// 4. new fresh next.js and config from start
// 5. import { UsersList } from '@api/users/users.dto'; - bug?
// 6. deployment on Vercel
// 7. clear models
