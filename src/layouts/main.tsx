import Head from 'next/head';
import GlobalStyles from 'src/styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Users App</title>
        <meta name="description" content="Users App - This is the website to manage users" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Users App - This is the website to manage users" />
        <meta property="og:title" content="Users App" />
        <meta property="og:url" content="https://" />
        <meta property="og:image" content="https:///cover.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <GlobalStyles />
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
};

export default Layout;
