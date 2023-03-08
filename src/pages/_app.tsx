import type { AppProps } from 'next/app';
import '../../i18n';
import MainLayout from '../layouts/main';
import { wrapper } from 'src/state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
