import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { wrapper } from 'src/state/store';
import {
  getUsersListRequest,
  deleteUserRequest,
  createUserRequest,
  updateUserRequest
} from 'src/state/users/actions';

type Inputs = {
  id: string;
  fields: {
    fullName: string;
    userName: string;
    email: string;
    city: string;
  };
};

const Home = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  //   dispatch(
  //     createUserRequest({
  //       records: [
  //         {
  //           fields: {
  //             city: data.fields.city,
  //             email: data.fields.email,
  //             fullName: data.fields.fullName,
  //             userName: data.fields.userName
  //           }
  //         }
  //       ]
  //     })
  //   );
  //   reset();
  // };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(updateUserRequest({ records: [data] }));
    reset();
  };

  const dispatch = useAppDispatch();
  const { data, statusGetUsersList, statusDeleteUser, statusCreateUser, statusUpdateUser } =
    useAppSelector((state) => state.usersList);

  const onDeleteUser = (idUser: string) => {
    dispatch(deleteUserRequest(idUser));
  };

  useEffect(() => {
    if (
      statusDeleteUser === 'succeeded' ||
      statusCreateUser === 'succeeded' ||
      statusUpdateUser === 'succeeded'
    ) {
      dispatch(getUsersListRequest());
    }
  }, [statusDeleteUser, statusCreateUser, statusUpdateUser]);

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
            {user.fields.fullName}{' '}
            <button
              onClick={() => {
                setValue('fields.fullName', user.fields.fullName);
                setValue('fields.userName', user.fields.userName);
                setValue('fields.email', user.fields.email);
                setValue('fields.city', user.fields.city);
                setValue('id', user.id);
              }}>
              Edit
            </button>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('fields.fullName', { required: true })} />
          {errors.fields?.fullName && <span>This field is required</span>}

          <input {...register('fields.userName', { required: true })} />
          {errors.fields?.userName && <span>This field is required</span>}

          <input {...register('fields.email', { required: true })} />
          {errors.fields?.fullName && <span>This field is required</span>}

          <input {...register('fields.city', { required: true })} />
          {errors.fields?.city && <span>This field is required</span>}

          <input {...register('id')} />

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
