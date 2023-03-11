import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from 'src/state/store';
import '../../i18n';

import MainLayout from '../layouts/main';
import { Spinner } from '@components/spinner';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = function () {
        setIsLoadingPage(false);
      };
    }
  }, []);

  return (
    <>
      {isLoadingPage ? (
        <div style={{ height: '100vh' }}>
          <Spinner width="50px" height="50px" />
        </div>
      ) : null}
      <MainLayout isLoadingPage={isLoadingPage}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
