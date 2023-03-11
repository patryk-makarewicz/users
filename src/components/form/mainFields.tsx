//@ts-ignore
import { UseFormMethods } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/button';

import * as Styled from './form.styles';

interface MainFieldsProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  reset: () => void;
}

export const MainFields = ({ register, errors, reset }: MainFieldsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Styled.FormBox>
      <Styled.Container>
        <Styled.Label htmlFor="fields.fullName">{t('form.fullName')}</Styled.Label>
        <Styled.Input
          {...register('fields.fullName', { required: true })}
          maxLength={65}
          id="fields.fullName"
          type="text"
          name="fields.fullName"
          placeholder={t('form.fullName')}
          $error={!!errors.fields?.fullName}
        />
        {errors.fields?.fullName && (
          <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>
        )}
      </Styled.Container>
      <Styled.Container>
        <Styled.Label htmlFor="fields.userName">{t('form.userName')}</Styled.Label>
        <Styled.Input
          {...register('fields.userName', { required: true })}
          maxLength={65}
          id="fields.userName"
          type="text"
          name="fields.userName"
          placeholder={t('form.userName')}
          $error={!!errors.fields?.userName}
        />
        {errors.fields?.userName && (
          <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>
        )}
      </Styled.Container>
      <Styled.Container>
        <Styled.Label htmlFor="fields.email">{t('form.email')}</Styled.Label>
        <Styled.Input
          {...register('fields.email', { required: true })}
          maxLength={65}
          id="fields.email"
          type="email"
          name="fields.email"
          placeholder={t('form.email')}
          $error={!!errors.fields?.email}
        />
        {errors.fields?.email && <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>}
      </Styled.Container>
      <Styled.Container>
        <Styled.Label htmlFor="fields.city">{t('form.city')}</Styled.Label>
        <Styled.Input
          {...register('fields.city', { required: true })}
          maxLength={65}
          id="fields.city"
          type="text"
          name="fields.city"
          placeholder={t('form.city')}
          $error={!!errors.fields?.city}
        />
        {errors.fields?.city && <Styled.ErrorMessage>{t('form.isRequired')}</Styled.ErrorMessage>}
      </Styled.Container>

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
  );
};
