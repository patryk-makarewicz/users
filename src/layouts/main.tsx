import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Head from 'next/head';
import GlobalStyles from '@/styles/GlobalStyles';
import { PageLayout } from './pageLayout';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Users App</title>
        <meta name="description" content="Users App - This is the website to manage users" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Users App - This is the website to manage users" />
        <meta property="og:title" content="Users App" />
        <meta property="og:url" content="https://makadev-users-manager.netlify.app/" />
        <meta property="og:image" content="https://makadev-users-manager.netlify.app/cover.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <GlobalStyles />
        <Header />
        <main>
          <PageLayout>{children}</PageLayout>
        </main>
        <Footer />
      </>
    </>
  );
};

export default Layout;
