import { useTranslation } from 'react-i18next';
import { getUsersList } from '@api/Users/Users.api';

const Home = ({ data }: any) => {
  const { t } = useTranslation();

  console.log(data);
  return <main>{t('navigation.home')}</main>;
};

export async function getServerSideProps() {
  const response = await getUsersList();
  const data = await response;

  return { props: { data } };
}

export default Home;
