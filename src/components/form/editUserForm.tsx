import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import {
  getUsersListRequest,
  deleteUserRequest,
  createUserRequest,
  updateUserRequest
} from 'src/state/users/actions';
import { EditUserFormModel } from '@api/users/users.model';

export const EditUserForm = () => {
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

      <input {...register('id')} hidden />

      <input type="submit" />

      <Link href="/">Cancel</Link>
    </form>
  );
};
