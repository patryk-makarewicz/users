import { deleteUser, getUsersList } from '@api/users/users.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersListRequest = createAsyncThunk('users/getUsersList', async () => {
  const response = await getUsersList();

  return response.records;
});

export const deleteUserRequest = createAsyncThunk('users/deleteUser', async (userId: string) => {
  const response = await deleteUser(userId);

  return response;
});
