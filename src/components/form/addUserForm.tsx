import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CreateUserFormModel } from '@api/users/users.model';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'src/state/hooks';
import { createUserRequest } from 'src/state/users/actions';
import { Button } from '@components/button';

export const AddUserForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
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
      <input {...register('fields.fullName', { required: true })} />
      {errors.fields?.fullName && <span>This field is required</span>}

      <input {...register('fields.userName', { required: true })} />
      {errors.fields?.userName && <span>This field is required</span>}

      <input {...register('fields.email', { required: true })} />
      {errors.fields?.fullName && <span>This field is required</span>}

      <input {...register('fields.city', { required: true })} />
      {errors.fields?.city && <span>This field is required</span>}

      <Button
        secondary
        onClick={() => {
          router.push('/');
        }}>
        {t('user.edit')}
      </Button>
      <Button type="submit" onClick={() => {}}>
        {t('user.submit')}
      </Button>
    </form>
  );
};
