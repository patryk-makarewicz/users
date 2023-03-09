import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest } from 'src/state/users/actions';
import { Button } from '@components/button';
import { User } from '@components/user';

import * as Styled from './home.styles';

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, statusGetUsersList, statusDeleteUser, statusCreateUser, statusUpdateUser } =
    useAppSelector((state) => state.usersList);

  useEffect(() => {
    if (
      statusDeleteUser === 'succeeded' ||
      statusCreateUser === 'succeeded' ||
      statusUpdateUser === 'succeeded'
    ) {
      dispatch(getUsersListRequest());
    }
  }, [statusDeleteUser, statusCreateUser, statusUpdateUser]);

  return (
    <Styled.Container>
      <Styled.Box>
        {t('user.list')}
        <Button
          onClick={() => {
            router.push('/add');
          }}>
          {t('user.add')}
        </Button>
      </Styled.Box>

      <div>
        {(() => {
          if (statusGetUsersList === 'pending') {
            return 'Loading...';
          }
          if (statusGetUsersList === 'failed') {
            return 'Error';
          }
          return (
            <>
              {data?.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </>
          );
        })()}
      </div>
    </Styled.Container>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getUsersListRequest());
});

export default Home;
