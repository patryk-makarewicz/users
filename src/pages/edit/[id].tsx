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

export default EditPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) }
  };
}
