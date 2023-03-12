import { AddUserForm } from '@components/form';

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
