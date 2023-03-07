import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../../i18n';
import { Provider } from 'react-redux';
import MainLayout from '../layouts/main';
import { store } from 'src/state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
