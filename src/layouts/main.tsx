import Head from 'next/head';

import * as Styled from './main.styles';
import { PageLayout } from './pageLayout';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import GlobalStyles from '@/styles/GlobalStyles';

type LayoutProps = {
  children: React.ReactNode;
  loadingPage: boolean;
};

const Layout = ({ children, loadingPage }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Users App</title>
        <meta name="description" content="Users App - This is the website to manage users" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Users App - This is the website to manage users" />
        <meta property="og:title" content="Users App" />
        <meta property="og:url" content="https://users-patryk-makarewicz.vercel.app/" />
        <meta property="og:image" content="https://users-patryk-makarewicz.vercel.app/cover.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <GlobalStyles />
        <Styled.Container loadingPage={loadingPage}>
          <Header />
          <main>
            <PageLayout>{children}</PageLayout>
          </main>
          <Footer />
        </Styled.Container>
      </>
    </>
  );
};

export default Layout;
