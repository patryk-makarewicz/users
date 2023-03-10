import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'src/state/hooks';
import { deleteUserRequest } from 'src/state/users/actions';
import { UserModel } from '@api/users/users.model';
import { Button } from '@components/button';

import * as Styled from './user.styles';

export const User = (props: { user: UserModel }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Styled.Wrapper>
      <div>{props.user.fields.fullName}</div>
      <div>{props.user.fields.userName}</div>
      <div>{props.user.fields.email}</div>
      <div>{props.user.fields.city}</div>
      <Button
        editColor
        onClick={() => {
          router.push(`/edit/${props.user.id}`);
        }}>
        {t('user.edit')}
      </Button>
      <Button deleteColor onClick={() => dispatch(deleteUserRequest(props.user.id))}>
        {t('user.delete')}
      </Button>
    </Styled.Wrapper>
  );
};
