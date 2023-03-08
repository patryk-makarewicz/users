import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import { getUsersListRequest, deleteUserRequest, createUserRequest } from 'src/state/users/actions';

type Inputs = {
  fullName: string;
  userName: string;
  email: string;
  city: string;
};

const Home = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createUserRequest({ records: [{ fields: data }] }));
    reset();
  };

  const dispatch = useAppDispatch();
  const { data, statusGetUsersList, statusDeleteUser, statusCreateUser } = useAppSelector(
    (state) => state.usersList
  );

  const onDeleteUser = (idUser: string) => {
    dispatch(deleteUserRequest(idUser));
  };

  useEffect(() => {
    if (statusDeleteUser === 'succeeded' || statusCreateUser === 'succeeded') {
      dispatch(getUsersListRequest());
    }
  }, [statusDeleteUser, statusCreateUser]);

  // ----- TODO -----> handle failed status on actions

  return (
    <main>
      {t('users.title')}
      <h4>{statusGetUsersList === 'pending' && 'Loading...'}</h4>
      <h4>{statusGetUsersList === 'failed' && 'Error'}</h4>
      <h4>{statusGetUsersList === 'succeeded' && 'Success'}</h4>

      <button onClick={() => dispatch(getUsersListRequest())}>Refetch data</button>
      {/* <button onClick={() => dispatch(createUserRequest())}>Add</button> */}

      <div>
        {data.map((user) => (
          <div key={user.id}>
            {user.fields.fullName} <button>Edit</button>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('fullName', { required: true })} />
          {errors.fullName && <span>This field is required</span>}

          <input {...register('userName', { required: true })} />
          {errors.userName && <span>This field is required</span>}

          <input {...register('email', { required: true })} />
          {errors.fullName && <span>This field is required</span>}

          <input {...register('city', { required: true })} />
          {errors.userName && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </main>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getUsersListRequest());
});

export default Home;
