import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest } from 'src/state/users/actions';

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { data, loading: usersListStatus } = useAppSelector((state) => state.usersList);

  console.log(data);

  return (
    <main>
      {t('users.title')}
      <h4>{usersListStatus === 'pending' && 'Loading...'}</h4>
      <h4>{usersListStatus === 'failed' && 'Error'}</h4>
      <h4>{usersListStatus === 'succeeded' && 'Success'}</h4>

      <button onClick={() => dispatch(getUsersListRequest())}>Refetch data</button>
    </main>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getUsersListRequest());
});

export default Home;
