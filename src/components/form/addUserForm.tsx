import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { CreateUserFormModel } from '@api/users/users.model';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'src/state/hooks';
import { createUserRequest } from 'src/state/users/actions';
import { MainFields } from './mainFields';

export const AddUserForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateUserFormModel>();
  const onSubmit: SubmitHandler<CreateUserFormModel> = (data) => {
    dispatch(
      createUserRequest({
        records: [data]
      })
    );
    router.push('/');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MainFields errors={errors} register={register} reset={reset} />
    </form>
  );
};
