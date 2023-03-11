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
      <Styled.FormBox>
        <Styled.Container>
          <Styled.Label htmlFor="fullName">{t('form.fullName')}</Styled.Label>
          <Styled.Input
            {...register('fields.fullName', { required: true })}
            maxLength={65}
            id="fullName"
            type="text"
            name="fullName"
            placeholder={t('form.fullName')}
            $error={!!errors.fields?.fullName}
          />
          {errors.fields?.fullName && (
            <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>
          )}
        </Styled.Container>
        <Styled.Container>
          <Styled.Label htmlFor="userName">{t('form.userName')}</Styled.Label>
          <Styled.Input
            {...register('fields.userName', { required: true })}
            maxLength={65}
            id="userName"
            type="text"
            name="userName"
            placeholder={t('form.userName')}
            $error={!!errors.fields?.userName}
          />
          {errors.fields?.userName && (
            <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>
          )}
        </Styled.Container>
        <Styled.Container>
          <Styled.Label htmlFor="email">{t('form.email')}</Styled.Label>
          <Styled.Input
            {...register('fields.email', { required: true })}
            maxLength={65}
            id="email"
            type="email"
            name="email"
            placeholder={t('form.email')}
            $error={!!errors.fields?.email}
          />
          {errors.fields?.email && (
            <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>
          )}
        </Styled.Container>
        <Styled.Container>
          <Styled.Label htmlFor="city">{t('form.city')}</Styled.Label>
          <Styled.Input
            {...register('fields.city', { required: true })}
            maxLength={65}
            id="city"
            type="text"
            name="city"
            placeholder={t('form.city')}
            $error={!!errors.fields?.city}
          />
          {errors.fields?.city && <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>}
        </Styled.Container>

        <Styled.Input id="id" type="text" {...register('id')} hidden />

        <Styled.Wrapper>
          <Button
            secondary
            onClick={() => {
              router.push('/');
              reset();
            }}>
            {t('form.cancel')}
          </Button>
          <Button type="submit" onClick={() => {}}>
            {t('form.submit')}
          </Button>
        </Styled.Wrapper>
      </Styled.FormBox>
    </form>
  );
};
