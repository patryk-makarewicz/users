import { EditUserForm } from '@components/form';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>Edit Route- User ID: {id}</h2>
      <Link href="/">Home</Link>
      <EditUserForm />
    </div>
  );
};

export default EditPage;
