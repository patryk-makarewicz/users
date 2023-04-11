import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { EditUserForm } from '@components/form';
import * as Styled from '../../styles/edit.styles';

const EditPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  return (
    <Styled.Container>
      <h3>{t('user.editUser')}</h3>
      <EditUserForm id={id} />
    </Styled.Container>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations
    }
  };
};
export default EditPage;
