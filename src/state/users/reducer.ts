import { UsersListModel } from '@api/users/users.model';

import { createReducer } from '@reduxjs/toolkit';
import { deleteUserRequest, getUsersListRequest } from './actions';

type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed';

type UserListModel = {
  data: UsersListModel;
  statusGetUsersList: StatusType;
  statusDeleteUser: StatusType;
};

const initialState: UserListModel = {
  data: [] as unknown as UsersListModel,
  statusGetUsersList: 'idle',
  statusDeleteUser: 'idle'
};

export const usersListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUsersListRequest.pending, (state) => {
      state.statusGetUsersList = 'pending';
    })
    .addCase(getUsersListRequest.fulfilled, (state, { payload }) => {
      state.statusGetUsersList = 'succeeded';
      state.data = payload;
    })
    .addCase(getUsersListRequest.rejected, (state) => {
      state.statusGetUsersList = 'failed';
    })
    .addCase(deleteUserRequest.pending, (state) => {
      state.statusDeleteUser = 'pending';
    })
    .addCase(deleteUserRequest.fulfilled, (state) => {
      state.statusDeleteUser = 'succeeded';
    })
    .addCase(deleteUserRequest.rejected, (state) => {
      state.statusDeleteUser = 'failed';
    });
});

export default usersListReducer;
