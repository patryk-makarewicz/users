import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <main>{t('navigation.home')}</main>;
};

export default Home;
