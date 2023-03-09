import { UserModel } from '@api/users/users.model';
import { EditUserForm } from '@components/form';
import { useRouter } from 'next/router';

const EditPage = () => {
  const router = useRouter();
  const user: UserModel = JSON.parse(router.query.data as string);

  return (
    <div>
      <h2>Edit User</h2>
      <EditUserForm user={user} />
    </div>
  );
};

export default EditPage;
