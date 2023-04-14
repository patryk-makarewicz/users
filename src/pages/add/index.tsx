import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AddUserForm } from '@/components/form';
import * as Styled from '@/styles/add.styles';

type AddPageProps = {
  locale: string;
};

const AddPage = () => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <h3>{t('user.addUser')}</h3>
      <AddUserForm />
    </Styled.Container>
  );
};

export const getStaticProps = async ({ locale }: AddPageProps) => {
  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations
    }
  };
};

export default AddPage;
