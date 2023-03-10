import { UserModel } from '@api/users/users.model';
import { EditUserForm } from '@components/form';
import { useRouter } from 'next/router';

import * as Styled from '../../styles/edit.styles';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Styled.Container>
      <h2>Edit User</h2>
      <EditUserForm id={id} />
    </Styled.Container>
  );
};

export default EditPage;
