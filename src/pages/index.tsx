import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest, deleteUserRequest } from 'src/state/users/actions';

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, statusGetUsersList, statusDeleteUser, statusCreateUser, statusUpdateUser } =
    useAppSelector((state) => state.usersList);

  const onDeleteUser = (idUser: string) => {
    dispatch(deleteUserRequest(idUser));
  };

  useEffect(() => {
    if (
      statusDeleteUser === 'succeeded' ||
      statusCreateUser === 'succeeded' ||
      statusUpdateUser === 'succeeded'
    ) {
      dispatch(getUsersListRequest());
    }
  }, [statusDeleteUser, statusCreateUser, statusUpdateUser]);

  // ----- TODO -----> handle failed status on actions

  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add">Add User</Link>
          </li>
        </ul>
      </div>

      {t('users.title')}
      <h4>{statusGetUsersList === 'pending' && 'Loading...'}</h4>
      <h4>{statusGetUsersList === 'failed' && 'Error'}</h4>
      <h4>{statusGetUsersList === 'succeeded' && 'Success'}</h4>

      <button onClick={() => dispatch(getUsersListRequest())}>Refetch data</button>
      {/* <button onClick={() => dispatch(createUserRequest())}>Add</button> */}

      <div>
        {data.map((user) => (
          <div key={user.id}>
            {user.fields.fullName}{' '}
            <button
              onClick={() => {
                router.push({
                  pathname: `/edit/${user.id}`,
                  query: { data: JSON.stringify(user) }
                });
              }}>
              Edit
            </button>
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
