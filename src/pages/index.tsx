import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { deleteUserRequest, getUsersListRequest } from 'src/state/users/actions';
import { Button } from '@components/button';

import * as Styled from '../styles/home.styles';
import { Table } from '@components/table';
import { TableDataSourceModel } from '@api/users/users.model';

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

  const [dataSource, setDataSource] = useState<TableDataSourceModel>([]);
  useEffect(() => {
    if (statusGetUsersList === 'succeeded') {
      setDataSource(
        data.map((el) => ({
          key: el.id,
          name: el.fields.fullName,
          userName: el.fields.userName,
          email: el.fields.email,
          city: el.fields.city,
          id: el.id
        }))
      );
    }
  }, [statusGetUsersList]);

  const onHandleEdit = (id: string) => {
    router.push(`/edit/${id}`);
  };

  const onHandleDelete = (id: string) => {
    dispatch(deleteUserRequest(id));
  };

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
        <Table
          dataSource={dataSource}
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
        />
      </div>
    </Styled.Container>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getUsersListRequest());
});

export default Home;
