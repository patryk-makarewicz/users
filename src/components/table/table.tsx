import { TableDataSourceModel } from '@api/users/users.model';
import { Button } from '@components/button';
import { Table as AntdTable } from 'antd';

import { useTranslation } from 'react-i18next';

type TableProps = {
  dataSource: TableDataSourceModel;
  onHandleDelete: (key: string) => void;
  onHandleEdit: (key: string) => void;
};

export const Table = ({ dataSource, onHandleDelete, onHandleEdit }: TableProps) => {
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
      key: 'edit',
      render: (_: unknown, record: { key: string }) =>
        dataSource.length >= 1 ? (
          <Button editColor onClick={() => onHandleEdit(record.key)}>
            {t('user.edit')}
          </Button>
        ) : null
    },
    {
      title: t('table.columns.delete'),
      dataIndex: 'delete',
      key: 'delete',
      render: (_: unknown, record: { key: string }) =>
        dataSource.length >= 1 ? (
          <Button deleteColor onClick={() => onHandleDelete(record.key)}>
            {t('user.delete')}
          </Button>
        ) : null
    }
  ];
  return <AntdTable dataSource={dataSource} columns={columns} />;
};
