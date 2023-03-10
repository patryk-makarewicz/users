import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table as AntdTable, Modal } from 'antd';
import { TableDataSourceModel } from '@api/users/users.model';
import { Button } from '@components/button';

import * as Styled from './table.styles';

type TableProps = {
  dataSource: TableDataSourceModel;
  onHandleDelete: (key: string) => void;
  onHandleEdit: (key: string) => void;
};

export const Table = ({ dataSource, onHandleDelete, onHandleEdit }: TableProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const onHandleOk = () => {
    setIsModalOpen(false);
    onHandleDelete(selectedId);
  };

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
          <Button
            deleteColor
            onClick={() => {
              setIsModalOpen(true);
              setSelectedId(record.key);
            }}>
            {t('user.delete')}
          </Button>
        ) : null
    }
  ];
  return (
    <>
      <Modal
        title={t('user.delete')}
        open={isModalOpen}
        onOk={onHandleOk}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
        footer={[
          <Styled.FooterBox>
            <Button secondary key="back" onClick={() => setIsModalOpen(false)}>
              {t('user.cancel')}
            </Button>
            <Button onClick={onHandleOk}>{t('user.delete')}</Button>
          </Styled.FooterBox>
        ]}>
        <Styled.ModalText>{t('user.deleteConfirm')}</Styled.ModalText>
      </Modal>
      <AntdTable dataSource={dataSource} columns={columns} />
    </>
  );
};
