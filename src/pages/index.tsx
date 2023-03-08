import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest, deleteUserRequest } from 'src/state/users/actions';

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { data, statusGetUsersList, statusDeleteUser } = useAppSelector((state) => state.usersList);

  const onDeleteUser = (idUser: string) => {
    dispatch(deleteUserRequest(idUser));
  };

  useEffect(() => {
    if (statusDeleteUser === 'succeeded') {
      dispatch(getUsersListRequest());
    }
  }, [statusDeleteUser]);

  return (
    <main>
      {t('users.title')}
      <h4>{statusGetUsersList === 'pending' && 'Loading...'}</h4>
      <h4>{statusGetUsersList === 'failed' && 'Error'}</h4>
      <h4>{statusGetUsersList === 'succeeded' && 'Success'}</h4>

      <button onClick={() => dispatch(getUsersListRequest())}>Refetch data</button>
      <button>Add</button>

      <div>
        {data.map((user) => (
          <div key={user.id}>
            {user.fields.fullName} <button>Edit</button>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getUsersListRequest());
});

export default Home;
