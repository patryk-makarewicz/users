import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';

import { getUserRequest, updateUserRequest } from 'src/state/users/actions';
import { EditUserFormModel } from '@api/users/users.model';
import { useTranslation } from 'react-i18next';
import { Button } from '@components/button';

import * as Styled from './form.styles';

export const EditUserForm = (props: { id: string | string[] | undefined }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, statusGetUser } = useAppSelector((state) => state.usersList);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<EditUserFormModel>();

  const onSubmit: SubmitHandler<EditUserFormModel> = (data) => {
    dispatch(updateUserRequest({ records: [data] }));
    router.push('/');
  };

  useEffect(() => {
    if (props.id !== undefined) {
      dispatch(getUserRequest(props.id as string));
    }
  }, []);

  useEffect(() => {
    if (statusGetUser === 'succeeded') {
      setValue('fields.fullName', user.fields.fullName);
      setValue('fields.userName', user.fields.userName);
      setValue('fields.email', user.fields.email);
      setValue('fields.city', user.fields.city);
      setValue('id', user.id);
    }
  }, [statusGetUser]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Wrapper>
        <input {...register('fields.fullName', { required: true })} />
        {errors.fields?.fullName && <span>This field is required</span>}

        <input {...register('fields.userName', { required: true })} />
        {errors.fields?.userName && <span>This field is required</span>}

        <input {...register('fields.email', { required: true })} />
        {errors.fields?.fullName && <span>This field is required</span>}

        <input {...register('fields.city', { required: true })} />
        {errors.fields?.city && <span>This field is required</span>}

        <input {...register('id')} hidden />
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Button
          secondary
          onClick={() => {
            router.push('/');
            reset();
          }}>
          {t('user.cancel')}
        </Button>
        <Button type="submit" onClick={() => {}}>
          {t('user.submit')}
        </Button>
      </Styled.Wrapper>
    </form>
  );
};
