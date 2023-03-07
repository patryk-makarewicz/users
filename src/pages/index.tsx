import { useTranslation } from 'react-i18next';
import { getUsersList } from '@api/Users/Users.api';
import { useSelector } from 'react-redux';
import { RootState, store } from 'src/state/store';
import { useEffect } from 'react';
import { fetchUsersList } from 'src/state/users';

const Home = ({ data }: any) => {
  const { t } = useTranslation();

  const UsersList = useSelector((state: RootState) => state.usersList);
  const statusUsersList = useSelector((state: RootState) => state.usersList.status);

  useEffect(() => {
    store.dispatch(fetchUsersList());
  }, []);

  return <main>{t('navigation.home')}</main>;
};

// export async function getServerSideProps() {
//   const response = await getUsersList();
//   const data = await response;

//   return { props: { data } };
// }

export default Home;
