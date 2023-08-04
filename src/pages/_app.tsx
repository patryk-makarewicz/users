import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { ImageOnLoad } from '@/helpers/imageOnLoad';
import MainLayout from '@/layouts/main';
import { wrapper } from '@/state/store';

function MyApp({ Component, pageProps }: AppProps) {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoadingPage(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loadingPage && <ImageOnLoad />}
      <MainLayout loadingPage={loadingPage}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
