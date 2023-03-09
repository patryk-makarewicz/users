import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from 'src/state/hooks';

import { updateUserRequest } from 'src/state/users/actions';
import { EditUserFormModel, UserModel } from '@api/users/users.model';
import { useTranslation } from 'react-i18next';
import { Button } from '@components/button';

export const EditUserForm = (props: { user: UserModel }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<EditUserFormModel>();

  const onSubmit: SubmitHandler<EditUserFormModel> = (data) => {
    dispatch(updateUserRequest({ records: [data] }));
    router.push('/');
  };

  useEffect(() => {
    setValue('fields.fullName', props.user.fields.fullName);
    setValue('fields.userName', props.user.fields.userName);
    setValue('fields.email', props.user.fields.email);
    setValue('fields.city', props.user.fields.city);
    setValue('id', props.user.id);
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

      <Button
        secondary
        onClick={() => {
          router.push('/');
        }}>
        {t('user.cancel')}
      </Button>
      <Button type="submit" onClick={() => {}}>
        {t('user.submit')}
      </Button>
    </form>
  );
};
