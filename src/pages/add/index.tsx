import { AddUserForm } from '@components/form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import * as Styled from '../../styles/add.styles';

const AddPage = () => {
  return (
    <Styled.Container>
      <h3>Add User</h3>
      <AddUserForm />
    </Styled.Container>
  );
};

export default AddPage;
export async function getServerSideProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) } // will be passed to the page component as props
  };
}
