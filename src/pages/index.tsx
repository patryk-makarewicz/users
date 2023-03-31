import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { deleteUserRequest, getUsersListRequest } from 'src/state/users/actions';
import { TableDataSourceModel } from '@api/users/users.model';
import { Button } from '@components/button';
import { Table } from '@components/table';

import * as Styled from '../styles/home.styles';

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
        <Styled.Text>{t('user.list')}</Styled.Text>

        <Button
          onClick={() => {
            router.push('/add');
          }}>
          {t('user.add')}
        </Button>
      </Styled.Box>

      <Table dataSource={dataSource} onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit} />
    </Styled.Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }: any) => {
  await store.dispatch(getUsersListRequest());

  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) }
  };
});

export default Home;
