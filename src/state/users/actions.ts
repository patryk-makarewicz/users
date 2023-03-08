import { createUser, deleteUser, getUsersList } from '@api/users/users.api';
import { CreateUser } from '@api/users/users.dto';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersListRequest = createAsyncThunk('getUsersList', async () => {
  const response = await getUsersList();

  return response.records;
});

export const deleteUserRequest = createAsyncThunk('deleteUser', async (userId: string) => {
  const response = await deleteUser(userId);

  return response;
});

export const createUserRequest = createAsyncThunk('createUser', async (data: CreateUser) => {
  const response = await createUser(data);

  return response;
});
