import { UsersListModel } from '@api/users/users.model';

import { createReducer } from '@reduxjs/toolkit';
import { getUsersListRequest } from './actions';

type UserListRequestModel = {
  data: UsersListModel;
  loading: string;
};

const initialState: UserListRequestModel = {
  data: [] as unknown as UsersListModel,
  loading: 'idle' || 'pending' || 'succeeded' || 'failed'
};

export const usersListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUsersListRequest.pending, (state) => {
      state.loading = 'pending';
    })
    .addCase(getUsersListRequest.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded';
      state.data = payload;
    })
    .addCase(getUsersListRequest.rejected, (state) => {
      state.loading = 'failed';
    });
});

export default usersListReducer;
