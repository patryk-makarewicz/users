import { UsersListModel } from '@api/users/users.model';
import { Button } from '@components/button';
import { Popconfirm, Table as AntdTable } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type UserProps = {
  city: string;
  email: string;
  id: string;
  key: string;
  name: string;
  userName: string;
}[];

type TableProps = {
  dataSource: UserProps;
  handleDelete: (key: string) => void;
};

export const Table = ({ dataSource, handleDelete }: TableProps) => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t('table.columns.name'),
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: t('table.columns.userName'),
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: t('table.columns.email'),
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: t('table.columns.city'),
      dataIndex: 'city',
      key: 'city'
    },
    {
      title: t('table.columns.edit'),
      dataIndex: 'edit',
      key: 'edit'
    },
    {
      title: t('table.columns.delete'),
      dataIndex: 'delete',
      key: 'delete',
      render: (_: any, record: { key: string }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>{record.key}</a>
          </Popconfirm>
        ) : null
    }
  ];
  return <AntdTable dataSource={dataSource} columns={columns} />;
};
