import { EditUserForm } from '@components/form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import * as Styled from '../../styles/edit.styles';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Styled.Container>
      <h3>Edit User</h3>
      <EditUserForm id={id} />
    </Styled.Container>
  );
};

export default EditPage;
export async function getServerSideProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) } // will be passed to the page component as props
  };
}
