import { UsersListModel } from '@api/users/users.model';

import { createReducer } from '@reduxjs/toolkit';
import {
  createUserRequest,
  deleteUserRequest,
  getUsersListRequest,
  updateUserRequest
} from './actions';

type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed';

type UserListModel = {
  data: UsersListModel;
  statusGetUsersList: StatusType;
  statusDeleteUser: StatusType;
  statusCreateUser: StatusType;
  statusUpdateUser: StatusType;
};

const initialState: UserListModel = {
  data: [] as unknown as UsersListModel,
  statusGetUsersList: 'idle',
  statusDeleteUser: 'idle',
  statusCreateUser: 'idle',
  statusUpdateUser: 'idle'
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
    })
    .addCase(createUserRequest.pending, (state) => {
      state.statusCreateUser = 'pending';
    })
    .addCase(createUserRequest.fulfilled, (state) => {
      state.statusCreateUser = 'succeeded';
    })
    .addCase(createUserRequest.rejected, (state) => {
      state.statusCreateUser = 'failed';
    })
    .addCase(updateUserRequest.pending, (state) => {
      state.statusUpdateUser = 'pending';
    })
    .addCase(updateUserRequest.fulfilled, (state) => {
      state.statusUpdateUser = 'succeeded';
    })
    .addCase(updateUserRequest.rejected, (state) => {
      state.statusUpdateUser = 'failed';
    });
});

export default usersListReducer;
