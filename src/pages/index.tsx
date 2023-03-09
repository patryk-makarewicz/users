import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest, deleteUserRequest } from 'src/state/users/actions';
import { Button } from '@components/button';

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
        <h4>
          Get Users List Status:{' '}
          {(() => {
            if (statusGetUsersList === 'pending') {
              return 'Loading...';
            }
            if (statusGetUsersList === 'failed') {
              return 'Error';
            }
            if (statusGetUsersList === 'succeeded') {
              return 'Success';
            }
            return;
          })()}
        </h4>
      </div>
      <div>
        {t('users.title')}
        <Button
          onClick={() => {
            router.push('/add');
          }}>
          Add new
        </Button>
      </div>

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
