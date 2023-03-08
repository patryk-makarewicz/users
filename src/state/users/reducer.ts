import { UsersListModel } from '@api/users/users.model';

import { createReducer } from '@reduxjs/toolkit';
import { getUsersListRequest } from './actions';

type UserListRequestModel = {
  data: UsersListModel;
  status: string;
};

const initialState: UserListRequestModel = {
  data: [] as unknown as UsersListModel,
  status: 'idle' || 'pending' || 'succeeded' || 'failed'
};

export const usersListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUsersListRequest.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getUsersListRequest.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.data = payload;
    })
    .addCase(getUsersListRequest.rejected, (state) => {
      state.status = 'failed';
    });
});

export default usersListReducer;
