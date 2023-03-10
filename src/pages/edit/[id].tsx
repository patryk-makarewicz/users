import { UserModel } from '@api/users/users.model';
import { EditUserForm } from '@components/form';
import { useRouter } from 'next/router';

import * as Styled from '../../styles/edit.styles';

const EditPage = () => {
  const router = useRouter();
  const user: UserModel = JSON.parse(router.query.data as string);

  return (
    <Styled.Container>
      <h2>Edit User</h2>
      <EditUserForm user={user} />
    </Styled.Container>
  );
};

export default EditPage;
