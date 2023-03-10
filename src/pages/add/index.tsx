import { AddUserForm } from '@components/form';

import * as Styled from '../../styles/add.styles';

const AddPage = () => {
  return (
    <Styled.Container>
      <h2>Add User</h2>
      <AddUserForm />
    </Styled.Container>
  );
};

export default AddPage;
