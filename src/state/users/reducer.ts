import { UserModel, UsersListModel } from '@api/users/users.model';

import { createReducer } from '@reduxjs/toolkit';
import {
  createUserRequest,
  deleteUserRequest,
  getUserRequest,
  getUsersListRequest,
  updateUserRequest
} from './actions';

type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed';

type UserListModel = {
  data: UsersListModel;
  user: any; // TODO ----- Add type
  statusGetUsersList: StatusType;
  statusDeleteUser: StatusType;
  statusCreateUser: StatusType;
  statusUpdateUser: StatusType;
  statusGetUser: StatusType;
};

const initialState: UserListModel = {
  data: [] as unknown as UsersListModel,
  user: [],
  statusGetUsersList: 'idle',
  statusDeleteUser: 'idle',
  statusCreateUser: 'idle',
  statusUpdateUser: 'idle',
  statusGetUser: 'idle'
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
    })
    .addCase(getUserRequest.pending, (state) => {
      state.statusGetUser = 'pending';
    })
    .addCase(getUserRequest.fulfilled, (state, { payload }) => {
      state.statusGetUser = 'succeeded';
      state.user = payload;
    })
    .addCase(getUserRequest.rejected, (state) => {
      state.statusGetUser = 'failed';
    });
});

export default usersListReducer;
