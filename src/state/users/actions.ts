import { getUsersList } from '@api/users/users.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersListRequest = createAsyncThunk('users/getUsersList', async () => {
  const response = await getUsersList();

  return response.records;
});
