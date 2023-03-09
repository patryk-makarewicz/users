import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from 'src/state/hooks';

import { updateUserRequest } from 'src/state/users/actions';
import { EditUserFormModel, UserModel } from '@api/users/users.model';

export const EditUserForm = (user: UserModel) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<EditUserFormModel>();

  const onSubmit: SubmitHandler<EditUserFormModel> = (data) => {
    dispatch(updateUserRequest({ records: [data] }));
    router.push('/');
  };

  useEffect(() => {
    setValue('fields.fullName', user.fields.fullName);
    setValue('fields.userName', user.fields.userName);
    setValue('fields.email', user.fields.email);
    setValue('fields.city', user.fields.city);
    setValue('id', user.id);
  }, []);

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

      <input {...register('id')} hidden />

      <input type="submit" />

      <Link href="/">Cancel</Link>
    </form>
  );
};
