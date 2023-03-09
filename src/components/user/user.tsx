import { UserModel } from '@api/users/users.model';
import { useRouter } from 'next/router';

import { useAppDispatch } from 'src/state/hooks';
import { deleteUserRequest } from 'src/state/users/actions';

import * as Styled from './user.styles';

export const User = (props: { user: UserModel }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Styled.Wrapper>
      <div>{props.user.fields.fullName}</div>
      <div>{props.user.fields.userName}</div>
      <div>{props.user.fields.email}</div>
      <div>{props.user.fields.city}</div>
      <button
        onClick={() => {
          router.push({
            pathname: `/edit/${props.user.id}`,
            query: { data: JSON.stringify(props.user) }
          });
        }}>
        Edit
      </button>
      <button onClick={() => dispatch(deleteUserRequest(props.user.id))}>Delete</button>
    </Styled.Wrapper>
  );
};
